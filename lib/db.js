import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try{
        mongoose.set('debug', true); // Enables mongoose debug mode
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            tls: true, 
            tlsAllowInvalidCertificates: false
          })
        console.log("MongoDB connected: " + conn.connection.host)
    }
    catch (error) {
        console.error("Error connecting to MongoDB")
        console.error(error)
    }
}