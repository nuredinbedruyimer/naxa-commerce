import React, { useRef } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const ImageUpload = ({
    imageFile, 
    setImageFile,
    uploadedImageUrl,
    setUploadedImageUrl
}) => {

    const handleFileChange = (event)=>{
      console.log(event.target.files)



    }



  const inputRef = useRef(null)
  return (
    <div className='w-full max-w-md mx-auto'>
    <Label className="font-semibold mb-2 block">Upload Image</Label>
    <div>
        <Input id="image-upload" type="file" className="" ref={inputRef} onChange={handleFileChange}/>
    </div>
      
    </div>
  )
}

export default ImageUpload
