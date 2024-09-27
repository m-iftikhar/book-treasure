import mongoose from "mongoose";

const dbConnection = async () => {
    const mongooseUrl = "";

    try {
        await mongoose.connect(mongooseUrl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB:", error);
        throw new Error("Could not connect to MongoDB server");
    }
}

export default dbConnection;
