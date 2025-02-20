import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
        console.log("MongoDB connected: " + conn.connection.host)

        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected to ' + conn.connection.host);
        });

        // Event handling for connection error
        mongoose.connection.on('error', (err) => {
            console.error('Mongoose connection error: ' + err);
        });
        // Event handling when the connection is disconnected
        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected');
        });
    }
    catch (error) {
        console.error("Error connecting to MongoDB")
        console.error(error)
    }
}