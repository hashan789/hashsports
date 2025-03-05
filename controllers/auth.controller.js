import { redis } from "../lib/redis.js";
import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from "dotenv";

dotenv.config();

const generateTokens = (userId) => {
    const accessToken = jwt.sign({ userId }, process.env.ACCESS_JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId }, process.env.REFRESH_JWT_SECRET, { expiresIn: '7d' });

    return { accessToken, refreshToken };
}

const storeRefreshToken = async (userId, refreshToken) => {
    await redis.set(`refresh_token:${userId}`, refreshToken, 'EX', 7 * 24 * 60 * 60);
}

const setCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken", accessToken, {
        httpOnly: false,
        maxAge: 15 * 60 * 1000
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: false,
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
}

export const signup = async (req, res) => {

    const { name , email , password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please provide all fields" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });

    //authenticate
    const {accessToken, refreshToken} = generateTokens(user._id);

    await storeRefreshToken(user._id, refreshToken);

    setCookies(res, accessToken, refreshToken);

    res.status(201).json({ 
      user : {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    } , message: "User created" });
}

export const login = async (req, res) => {

    try{
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please provide all fields" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        if (user && (await user.comparePasswords(password))) {
            const {accessToken, refreshToken} = generateTokens(user._id);

            await storeRefreshToken(user._id, refreshToken);

            setCookies(res, accessToken, refreshToken);

            res.json({ 
            user : {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            } , message: "User logged in" });
        } else {
            return res.status(400).json({ message: "Invalid credentials" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" , error : error.message });
    }
}


export const logout = async (req, res) => {
    try{
       const refreshToken = req.cookies.refreshToken;

       if(refreshToken){
           const { userId } = jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET);

           await redis.del(`refresh_token:${userId}`);
       }

         res.clearCookie('accessToken');
         res.clearCookie('refreshToken');
         res.json({ message: "Logged out successfully" });
    }
    catch (error) {
         res.status(500).json({ message: "Internal server error" , error : error.message });
    }
}

export const refreshToken = async (req, res) => {
    try{
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({ message: "No refresh token provided" });
        }

        const { userId } = jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET);

        const storedToken = await redis.get(`refresh_token:${userId}`);

        if (refreshToken !== storedToken) {
            return res.status(401).json({ message: "Unauthenticated" });
        }

        const accessToken = jwt.sign({ userId }, process.env.ACCESS_JWT_SECRET, { expiresIn: '15m' });

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: "strict",
            secure: true,
            maxAge: 15 * 60 * 1000
        });

        res.json({ message: "Token refreshed successfully" });

        
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" , error : error.message });
    }
}

export const getProfile = async (req, res) => {
    try{
        // const user = await User.findById(req.user.userId).select("-password");

        res.json(req.user);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" , error : error.message });
    }
}