import { STATUS_CODES, STATUS_MESSAGES } from "../../constants/constants.js"
import { uploadImage } from "../../helpers/cloudinary.js"
import { Product } from "../../models/productModel.js"



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



//  Delete Product


export const deleteProductController = async(req, res)=>{
    try {

        const {id} = req.params


        const existingProduct = await Product.findByIdAndDelete(id)

        if (!existingProduct){
            res.status(STATUS_CODES.NOT_FOUND).json({
                success:false, 
                message:"Product Not Found With Provided ID"
            })
            return
        }

        res.status(STATUS_CODES.Ok).json({
            success:false, 
            message:"Product  Deleted Successfully"
        })

        

        
    } catch (error) {
        console.log("Error In Creating Product")
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            success:false, 
            message:STATUS_MESSAGES.INTERNAL_SERVER_ERROR
        })
        
    }
}


// Get List Of Product

export const fetchAllProductController = async(req, res)=>{
    try {
        const products = await Product.find({})

        res.status(STATUS_CODES.OK).json({
            success:true,
            message:"Products Fetched Successfully !!", 
            products
        })
        
    } catch (error) {
        console.log("Error In Get ALL Product")
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            success:false, 
            message:STATUS_MESSAGES.INTERNAL_SERVER_ERROR
        })
        
    }
}


//  Get Single Product


export const fetchProductController = async(req, res)=>{
    try {
        const {id} = req.params

        const product = await Product.findByIDd(id)


        if (!product){
            res.status(STATUS_CODES.NOT_FOUND).json({
                success:false, 
                message:STATUS_MESSAGES.NOT_FOUND
            })
            return 
        }

        res.status(STATUS_CODES.OK).json({
            success:true, 
            message:"Product Fetch Successfully", 
            product
        })


        
    } catch (error) {
        console.log("Error In Get Single Product")
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            success:false, 
            message:STATUS_MESSAGES.INTERNAL_SERVER_ERROR
        })
        
    }
}


//  Update Product

export const updateProductController = async(req, res)=>{
    try {
        const {id} = req.params
        const {image, title, description, category, brand, price, salePrice, totalStock} = req.body

        const existingProduct = await Product.findByIDd(id)

        if (!existingProduct){
            res.status(STATUS_CODES.NOT_FOUND).json({
                success:false, 
                message:STATUS_MESSAGES.NOT_FOUND
            })
            return 
        }

        existingProduct.image = image || existingProduct.image
        existingProduct.description = description || existingProduct.description
        existingProduct.title = title || existingProduct.title
        existingProduct.category = category || existingProduct.category
        existingProduct.brand = brand || existingProduct.brand
        existingProduct.price = price || existingProduct.price
        existingProduct.salePrice = salePrice || existingProduct.salePrice
        existingProduct.totalStock = totalStock || existingProduct.totalStock


        await existingProduct.save()

        res.status(STATUS_CODES.OK).json({
            success:true, 
            message:"Product Updated Successfully !!!", 
            product:existingProduct
        })




        
    } catch (error) {
        console.log("Error In Update Product")
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            success:false, 
            message:STATUS_MESSAGES.INTERNAL_SERVER_ERROR
        })
        
    }
}

//  Create Product

export const createProductController = async(req, res)=>{
    try {

        const {image, title, description, category, brand, price, salePrice, totalStock} = req.body

        const newProduct = new Product({
            image, 
            title, 
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock

        })

        await newProduct.save()

        res.status(STATUS_CODES.CREATED).json({
            success:true, 
            message:"Product Created Successfully !!"
        })
        
    } catch (error) {
        console.log("Error In Deleting Product :")
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:STATUS_MESSAGES.INTERNAL_SERVER_ERROR
        })
        
    }
}