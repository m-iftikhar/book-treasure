import jwt from "jsonwebtoken";
import dotenv from "dotenv";

<<<<<<< HEAD
// Load environment variables from .env file
dotenv.config();

const generateToken = (id) => {
    // Use the secret key from process.env
    let token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return token;
}

export default generateToken;
=======
const generateToken = (id)=>{
    let token = jwt.sign({id}, "", {expiresIn: "1d"});
    return token;
}

export default generateToken
>>>>>>> d591e1788d7ddb773b93170c0ce05beaab090391
