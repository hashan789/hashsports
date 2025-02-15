import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Increase timeout to 30s
            socketTimeoutMS: 45000, // Increase socket timeout
        })
        console.log("MongoDB connected: " + conn.connection.host)
    }
    catch (error) {
        console.error("Error connecting to MongoDB")
        console.error(error)
    }
}