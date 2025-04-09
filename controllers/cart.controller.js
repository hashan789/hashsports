import Product from "../models/product.model.js";

export const addToCart = async (req, res) => {
    try {
        
        const { productId } = req.body;
        const user = req.user;

        const existingProduct = user.cartItems.find((product) => product.id === productId);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            user.cartItems.push(productId);
        }

        await user.save();

        res.json(user.cartItems);

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export const removeAllFromCart = async (req, res) => {
    try{
        const { productId } = req.body;
        const user = req.user;
        if(productId){
            user.cartItems = user.cartItems.filter(product => product.productId !== productId);
        } else {
            user.cartItems = [];
        }

        await user.save();
        res.json(user.cartItems);
    }
    catch(error){
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export const removeAllItems = async (req,res) => {
    try{
        const user = req.user;
        user.cartItems = [];

        await user.save();
        res.json(user.cartItems);
    }
    catch(error){
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export const updateQuantity = async (req, res) => {
    try {
        
        const { id : productId } = req.params;
        const { quantity } = req.body;
        const user = req.user;
        const existingProduct = user.cartItems.find((item) => item.id === productId);

        if(existingProduct){
            if(quantity === 0){
                user.cartItems = user.cartItems.filter((item) => item.id !== productId);
                await user.save();
                return res.json(user.cartItems);
            }

            existingProduct.quantity = quantity;
            await user.save();
            res.json(user.cartItems);
        }
        else{
            res.status(404).json({ message: "Product not found" });
        }

    } catch (error) {
        
    }
}

export const getCartProducts = async (req, res) => {

    try {
        const products = await Product.find({ _id: { 
            $in : req.user.cartItems
        } });

        //add quantity for each product
        const cartItems = products.map((product) => {
            const item = req.user.cartItems.find(cartItem => cartItem.id === product.id);
            return {
                ...product.toJSON(),
                quantity: item.quantity
            }
        });

        res.json(cartItems);

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}    