import AdminProductTile from '@/components/admin/AdminProductTile'
import ImageUpload from '@/components/admin/ImageUpload'
import Form from '@/components/common/Form'
import { Button } from '@/components/ui/button'
import { SheetContent, Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { createProductFormItems } from '@/config'
import { createProduct, deleteProduct, fetchAllProducts, productSelector, updateProducts } from '@/features/product/productSlice'
import { useToast } from '@/hooks/use-toast'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const intialCreateProductState = {
  image:null, 
  title:"", 
  description:"",
  category: "",
  brand :"",
  price: "",
  salesPrice: "", 
  totalStock:""
}

const AdminProduct = () => {


  const {toast} = useToast()
  const [openCreateProductDialog , setOpenProductDialog] = useState(false)
  const [createProductFormData, setCreateProductFormData] = useState(intialCreateProductState)
  const [imageFile, setImageFile] = useState(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState("")
  const [imageLoadingState, setImageLoadingState] = useState(false)
  const [currentEditedId, setCurrentEditedId] = useState(null)
  


  const {products} = useSelector(productSelector)

  const dispatch = useDispatch()
  console.log("Image Url Generated By Cloudnary : ", uploadedImageUrl)

  const onSubmit = (event)=>{
    event.preventDefault();

    currentEditedId !== null ?
    dispatch(updateProducts({
      id:currentEditedId, 
      formData:createProductFormData
    })).then((response)=>{
      // console.log("Updated Data : ", response)
      dispatch(fetchAllProducts())
      setCreateProductFormData(intialCreateProductState)
      setOpenProductDialog(false)
      setCurrentEditedId
    }):

    dispatch(createProduct({
      ...createProductFormData, 
      image:uploadedImageUrl, 
    })).then(response=>{
      if(response.payload?.success){
        dispatch(fetchAllProducts())
        setImageFile(null)
        setCreateProductFormData(intialCreateProductState)
        setOpenProductDialog(false)
        toast({
          title: response.payload?.message,
          style: {
            backgroundColor: '#333', // Dark background
            color: '#fff',           // Light text
            borderRadius: '10px',     // Rounded corners
            padding: '10px',          // Spacing inside the toast
            fontSize: '16px'          // Custom font size
          }
        });
        


      }
    })


    






  }

  const handleDelete = (productID)=>{
    dispatch(deleteProduct(productID)).then((response=>{
      console.log("I AM Delete Response  : ", response)
    }))

    
  }

  // console.log("Uploaded Image Url : ", uploadedImageUrl)

  useEffect(()=>{
    dispatch(fetchAllProducts())

  }, [dispatch])
  return (
    <Fragment>
          <div className='flex justify-end w-full mb-12'>
          <Button className="bg-sky-500 hover:bg-sky-600" onClick={()=>setOpenProductDialog(true)}>Create Product</Button>
    </div>
    <div className='grid gap-4 grid-4 md:grid-cols-2 lg:grid-cols-3'>

    {
      products && products.length > 0 ?products.map((product, index)=><AdminProductTile
      setOpenProductDialog = {setOpenProductDialog}
      setCreateProductFormData = {setCreateProductFormData}
       setCurrentEditedId = {setCurrentEditedId} 
       handleDelete = {handleDelete}
       key={index}
       product={product}/>):null
    }
    <Sheet className="" open={openCreateProductDialog} onOpenChange={()=>{
      setOpenProductDialog(false), 
      setCreateProductFormData(intialCreateProductState)
      setCurrentEditedId(null)
    }}>

    <SheetContent side="right" className="overflow-auto" >
    <SheetHeader>
      <SheetTitle className="text-center text-2xl font-semibold mb-8">

      {
        currentEditedId !== null ? "Update Product":"Create Product"
      }
      </SheetTitle>
    </SheetHeader>
    <ImageUpload imageFile={imageFile} setImageFile = {setImageFile} uploadedImageUrl ={uploadedImageUrl}

      setUploadedImageUrl={setUploadedImageUrl}
      setImageLoadingState={setImageLoadingState}
      imageLoadingState = {imageLoadingState}

    />
    <div>
      <Form
      formControls={createProductFormItems}
      formData={createProductFormData}
      setFormData={setCreateProductFormData}
      onSubmit= {onSubmit}
      buttonText={currentEditedId !== null ? "Edit Product":"Create Product"}


      />
    </div>

    </SheetContent>
    </Sheet>

    </div>
    </Fragment>

  )
}

export default AdminProduct
