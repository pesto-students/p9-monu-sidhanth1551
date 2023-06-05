const jwt = require('jsonwebtoken');

const validateToken= (req,res,next)=>{
   
    let token;
    let authHeader=req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1];
        console.log(process.env.ACCESS_TOKEN_SECERT)
        jwt.verify(token,process.env.ACCESS_TOKEN_SECERT,(err,decoded)=>{
            if(err){
               res.status(401)
               throw new Error("user is not authorized")  
            }
            console.log(decoded);
            req.user=decoded.user;
            next();
        });

        if(!token){
            res.status(401)
            throw new Error("user is not authorized")  
        }
    }
    else{
        res.status(401)
        throw new Error("user is not authorized")  
    }
}

module.exports = validateToken