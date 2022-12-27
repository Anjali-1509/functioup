const jwt = require("jsonwebtoken")

const checkToken= async function(req, res,next){
let appHeader = req.headers["x-auth-token"]
if(!appHeader){
    res.send({status: false, msg:"important header is missing"})
}
else {
    next()
}
}

const authentication = async function(req, res, next){
   let token = req.headers["x-auth-token"]
   console.log(token)
   let decodedToken = await jwt.verify(token, "functionup-californium-very-very-secret-key", (err)=>{
    if(err){
        res.send({msg: "invalid token"})
    }
   })
   console.log(decodedToken)
   next()
   
}


module.exports.checkToken = checkToken
module.exports.authentication = authentication