import jwt from "jsonwebtoken";
import dotenv from "dotenv";


// Load environment variables from .env file
dotenv.config();

const generateToken = (id) => {
    // Use the secret key from process.env
    let token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return token;
}

export default generateToken;


