import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try{
          await mongoose.connect(process.env.AZURE_COSMOS_CONNECTIONSTRING).then(() => {
            console.log('Connected to MongoDB');
          }).catch(err => {
            console.error('Connection error', err);
          });
    }
    catch (error) {
        console.error("Error connecting to MongoDB")
        console.error(error)
    }
}