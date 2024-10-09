import ImageUpload from '@/components/admin/ImageUpload'
import Form from '@/components/common/Form'
import { Button } from '@/components/ui/button'
import { SheetContent, Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { createProductFormItems } from '@/config'
import React, { Fragment, useState } from 'react'

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

  const [openCreateProductDialog , setOpenProductDialog] = useState(false)
  const [createProductFormData, setCreateProductFormData] = useState(intialCreateProductState)
  const [imageFile, setImageFile] = useState(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState("")

  const onSubmit = ()=>{

  }
  return (
    <Fragment>
          <div className='flex justify-end w-full'>
      <Button onClick={()=> setOpenProductDialog(true)} className = "bg-lime-600 hover:bg-lime-700 text-white rounded-sm">Create Product</Button>
    </div>
    <div className='grid gap-4 grid-4 md:grid-cols-3 lg:grid-cols-4'>
    <Sheet className="" open={openCreateProductDialog} onOpenChange={setOpenProductDialog}>

    <SheetContent side="right" className="overflow-auto" >
    <SheetHeader>
      <SheetTitle className="text-center text-2xl font-semibold mb-8">
        Create Product
      </SheetTitle>
    </SheetHeader>
    <ImageUpload imageFile={imageFile} setImageFile = {setImageFile} uploadedImageUrl ={uploadedImageUrl}

      setUploadedImageUrl={setUploadedImageUrl}
    />
    <div>
      <Form
      formControls={createProductFormItems}
      formData={createProductFormData}
      setFormData={setCreateProductFormData}
      onSubmit= {onSubmit}
      buttonText="Add Product"


      />
    </div>

    </SheetContent>
    </Sheet>

    </div>
    </Fragment>

  )
}

export default AdminProduct
