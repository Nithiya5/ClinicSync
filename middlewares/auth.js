const jwt = require('jsonwebtoken');

const auth = async(req,res,next) =>{
  try{
    const token = req.header("Authorization").split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Token is required"})
    }
    else{
        const decoded = jwt.verify(token,"secret_key");
        req.user = decoded.userId;
        next();    
    }
  }catch(err){
    return res.status(401).json({message:"Invalid token"})
  }
};

module.exports = auth;