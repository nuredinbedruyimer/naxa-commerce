import express from "express";
import { createProductController, deleteProductController, fetchAllProductController, updateProductController, uploadImageController } from "../../controllers/admin/productController.js";
import { upload } from "../../helpers/cloudinary.js";





const router = express.Router()


router.post("/image-upload",upload.single("uploaded_image") ,uploadImageController)
router.post("" ,createProductController)   
router.put("/:id",updateProductController)
router.delete("/:id",deleteProductController)
router.get("", fetchAllProductController)


export default router