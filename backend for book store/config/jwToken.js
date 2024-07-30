import jwt  from "jsonwebtoken";

const generateToken = (id)=>{
    let token = jwt.sign({id}, "bookStorekey", {expiresIn: "1d"});
    return token;
}

export default generateToken