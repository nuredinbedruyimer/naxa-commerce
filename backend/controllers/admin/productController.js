import { STATUS_CODES } from "../../constants/constants.js"
import { uploadImage } from "../../helpers/cloudinary.js"



export const uploadImageController = async(req, res)=>{
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64")
        const url = "data:" + req.file.mimetype + ";base64," + b64

        const result = await uploadImage(url)
        console.log("Result : ", result)

        res.status(STATUS_CODES.CREATED).json({
            success:true, 
            message:"Image Uploaded Successfully !!!",
            result
        })
        
    } catch (error) {
        console.log(error)
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            success:false, 
            message:"Internal Server Error In Image Upload"
        })
        
    }
}