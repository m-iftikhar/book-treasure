import jwt from "jsonwebtoken";
import dotenv from "dotenv";

<<<<<<< HEAD
// Load environment variables from .env file
dotenv.config();

const generateRefreshToken = (id) => {
    // Use the secret key from process.env
    let token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
=======
const generateRefreshToken = (id)=>{
    let token = jwt.sign({id}, " ", {expiresIn: "3d"});
>>>>>>> d591e1788d7ddb773b93170c0ce05beaab090391
    return token;
}

export default generateRefreshToken;
