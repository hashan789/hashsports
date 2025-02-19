import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30s timeout
            socketTimeoutMS: 45000, // 45s keep connection alive
            maxPoolSize: 10, // Connection pooling
          })
        console.log("MongoDB connected: " + conn.connection.host)
    }
    catch (error) {
        console.error("Error connecting to MongoDB")
        console.error(error)
    }
}