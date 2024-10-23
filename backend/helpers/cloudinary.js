import {v2 as cloudinary}  from "cloudinary"
import multer from "multer"

const CLOUDINARY_API_KEY = "869239265324811"
const CLOUDINARY_API_SECRET ="3cruh11rl8krJ83HXHzYP06LL9M" 
const CLOUDINARY_CLOUD_NAME = "dohla6be4"
cloudinary.config({
    cloud_name:CLOUDINARY_CLOUD_NAME , 
    api_key:CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

const storage = new multer.memoryStorage();



export const uploadImage = async (file)=>{
    const result = await cloudinary.uploader.upload(file, {
        resource_type:"auto"
    })
    return result
}


export const upload = multer({storage:storage})




