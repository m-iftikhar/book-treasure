import jwt  from "jsonwebtoken";

const generateRefreshToken = (id)=>{
    let token = jwt.sign({id}, "bookStorekey", {expiresIn: "3d"});
    return token;
}

export default generateRefreshToken;