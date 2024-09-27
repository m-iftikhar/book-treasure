import jwt  from "jsonwebtoken";

const generateToken = (id)=>{
    let token = jwt.sign({id}, "", {expiresIn: "1d"});
    return token;
}

export default generateToken
