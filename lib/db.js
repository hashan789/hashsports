import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {

    const AZURE_MONGO_URI_RV = "mongodb://hashsports-mongorv:45fBwzIcefoAK0B84HrlWlnh7dYpr89Tc0p1q0BQKiteucKBzEuWgfE0lrrlcshRkdE2fkQ1lrQeACDbtN12Fg==@hashsports-mongorv.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@hashsports-mongorv@"

    try{
          await mongoose.connect(AZURE_MONGO_URI_RV).then(() => {
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