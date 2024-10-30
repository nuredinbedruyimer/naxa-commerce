import React, { useEffect, useRef } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Delete, DeleteIcon, FileIcon, RemoveFormattingIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import { Button } from '../ui/button'
import axios from 'axios'
import { Skeleton } from '../ui/skeleton'

const ImageUpload = ({
    imageFile, 
    setImageFile,
    setUploadedImageUrl, 
    setImageLoadingState, 
    imageLoadingState
    
}) => {

  const inputRef = useRef(null)


    const handleFileChange = (event)=>{
      console.log(event.target.files)

      const selectedImage = event.target.files[0]



      if (selectedImage) setImageFile(selectedImage)



    }


    const handleDragOver = (event)=>{
      event.preventDefault();

    }
    const handleDrop = (event) => {
      event.preventDefault(); 
      if (event.dataTransfer && event.dataTransfer.files.length > 0) {
        
        const droppedImage = event.dataTransfer.files[0];

        console.log("Dropped image:", droppedImage);

        if (droppedImage) setImageFile(droppedImage)
      } else {
          console.log("No files were dropped.");
      }
  };

  const handleRemoveImage = ()=>{
    setImageFile(null)
    if (inputRef.current){
      inputRef.current.value = ""
    }
  }

  const uploadImageToCloudinary = async()=>{
    setImageLoadingState(true)
    const data = new FormData();
    data.append("uploaded_image", imageFile)
    const response = await axios.post("http://localhost:8000/api/admin/products/image-upload", data)

    if (response.data?.success){
      setUploadedImageUrl(response.data?.result?.url)
      setImageLoadingState(false)
    }
  }
  


  useEffect(()=>{
    if (imageFile !== null) uploadImageToCloudinary() 

  }, [imageFile])



  



  
  return (
    <div className='w-full max-w-md mx-auto'>
    <Label className="font-semibold mb-2 block">Upload Image</Label>
    <div className=' bg-gray-100 rounded-lg' onDragOver={handleDragOver} onDrop={handleDrop}>
        <Input id="image-upload" type="file" className="hidden" ref={inputRef} onChange={handleFileChange}/>
        {
      !imageFile ? (<Label htmlFor="image-upload" className="flex  flex-col justify-center items-center h-40 cursor-pointer mb-4">
            <UploadCloudIcon className='w-12 h-12 text-muted-foreground mb-3 '/>
            <span className='text-sm font-light'>Drag and Drop or Click To Download Image</span>
      </Label>):( imageLoadingState ?<Skeleton className="py-8 bg-gray-300"/> : <div className='flex justify-between items-center'>
         <div className='flex justify-between items-center py-6'>

          <FileIcon className='w-6 h-6 text-primary mr-2'/>

         </div>
         <p className='text-sm font-medium'>{imageFile.name}</p>
         <Button onClick = {handleRemoveImage} variant="ghost" size="icon" className="text-muted-foreground">
          <XIcon className='w-4 h-4 hover:border-2'/>
          <span className='sr-only'>Remove Image</span>
         </Button>

      </div>)
    }
    
    
    
    </div>


      
    </div>
  )
}

export default ImageUpload
