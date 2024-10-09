import { STATUS_CODES, STATUS_MESSAGES } from "../constants/constants.js"
import jwt   from  "jsonwebtoken"
export const authMiddleware = async(req, res, next)=>{
    const token  = req.cookies.token
    // console.log("I am Token :", token)


    if (!token){
        res.status(STATUS_CODES.UNAUTHORIZED).json({
            success:false,
            message:"Unauthoruize Access"
        })
        return
    }

    try {
        const decode =  jwt.verify(token, process.env.JWT_SECRET_KEY)
        // console.log("I am Decoded : ", decode)
        req.user = decode
        next()

        
        
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: STATUS_MESSAGES.UNAUTHORIZED,
        })
        
    }



}