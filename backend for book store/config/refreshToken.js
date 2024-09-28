import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const generateRefreshToken = (id) => {
    // Use the secret key from process.env
    let token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
    return token;
}

export default generateRefreshToken;
