import { STATUS_CODES, STATUS_MESSAGES } from "../../constants/constants.js";
import { generateToken } from "../../helpers/tokenHelper.js";
import User from "../../models/users.js";
import jwt from "jsonwebtoken";
//  Package Importing




// User Register

export const registerController = async(req, res) => {
    //  We Have to Access the Data We Want From The Request and Place To appropriate Place
    const {userName, email, password} = req.body;

    try {


 

    let foundUser = await User.findOne({email})

    if (foundUser){
        res.status(STATUS_CODES.CONFLICT).json({
            success:false,
            message:"User Already Exists",

        })
        return
    }

    const newUser = new User({
        userName,
        email,
        password,
    })

    await newUser.save()

    res.status(STATUS_CODES.CREATED).json({
        success: true,
        message: STATUS_MESSAGES.CREATED,
        data: {
            userName,
            email,
            
        }

    })


        
    } catch (error) {
        console.log("Error : ", error)

        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            success: false,
            message:STATUS_MESSAGES.INTERNAL_SERVER_ERROR,
            error:error,

        })
        
    }


}



//  User Login

export const loginUser = async(req, res) =>{
    const {email, password} = req.body

    try {

        //  Check Existance Of Of User In The Data base if not we dont need to go further we just return 
        //  Some Error
        const foundUser = await User.findOne({email})

        if (!foundUser){
            res.status(STATUS_CODES.BAD_REQUEST).json({
                success:false,
                message:"User Does Not Exist With This Email",
            })
            return 
        }
        //  Check The password are same 
        // if not retun bad Request(400) 

        const isMatch = await foundUser.isPasswordCorrect(password)

        if (!isMatch){
            res.status(STATUS_CODES.BAD_REQUEST).json({
                success:false,
                message:"Email or Password Incorrect"
            })


            return
        }

        //  If The LoginPassword and The Hashed Password same wwe can move to Generating Accesss and 
        //  refresh Token


        const token = generateToken({id:foundUser._id, role:foundUser.role, email:foundUser.email, userName:foundUser.userName})
        res.cookie("token", token,{
            httpOnly:true,
            secure:false
        })
        res.status(STATUS_CODES.OK).json({
            success:true,
            message:"User Login Successfully !!",
            user:{
                email:foundUser.email,
                role:foundUser.role,
                id:foundUser._id,
                userName:foundUser.userName
            }
            
        })




        
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: STATUS_MESSAGES.INTERNAL_SERVER_ERROR
        })
        
    }
}




//  User Logout


export const logoutUser = async(req, res)=>{

    res.clearCookie("token")
    res.status(STATUS_CODES.OK).json({
        success:true,
        message:"User Logout Successfully !!"
    })
}