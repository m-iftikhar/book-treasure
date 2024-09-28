import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const dbConnection = async () => {

    // Use the MongoDB URI from the environment variable
    const mongooseUrl = process.env.MONGODB_URI;
   

    try {
        await mongoose.connect(mongooseUrl, {
            useNewUrlParser: true, // Optional: recommended for newer MongoDB drivers
            useUnifiedTopology: true, // Optional: recommended to handle MongoDB server discovery
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB:", error);
        throw new Error("Could not connect to MongoDB server");
    }
}

export default dbConnection;
