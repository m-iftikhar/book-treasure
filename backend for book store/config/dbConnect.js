import mongoose from "mongoose";

const dbConnection = async () => {
    const mongooseUrl = "mongodb://zunairtechmaestro:UtTUYYJ1IaWv36kn@ac-ehxj0uz-shard-00-00.w0zlx8a.mongodb.net:27017,ac-ehxj0uz-shard-00-01.w0zlx8a.mongodb.net:27017,ac-ehxj0uz-shard-00-02.w0zlx8a.mongodb.net:27017/book_store?ssl=true&authSource=admin&retryWrites=true&w=majority";

    try {
        await mongoose.connect(mongooseUrl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB:", error);
        throw new Error("Could not connect to MongoDB server");
    }
}

export default dbConnection;
