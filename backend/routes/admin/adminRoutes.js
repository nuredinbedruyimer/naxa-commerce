import express from "express";
import { uploadImageController } from "../../controllers/admin/productController.js";
import { upload } from "../../helpers/cloudinary.js";





const router = express.Router()


router.post("/image-upload",upload.single("uploaded_image") ,uploadImageController)

export default router