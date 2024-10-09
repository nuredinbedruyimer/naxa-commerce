import express from "express";
import { loginUser, logoutUser, registerController } from "../../controllers/auth/authController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { STATUS_CODES } from "../../constants/constants.js";



const router = express.Router();


router.post("/register", registerController)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.get("/check-auth", authMiddleware, (req, res)=>{
    const user = req.user;
    console.log("User From Login Route : ", user)
    console.log(user)
    res.status(STATUS_CODES.OK).json({
        success:true,
        message:"Authenticated User !!", 
        user
    })
})




export default router