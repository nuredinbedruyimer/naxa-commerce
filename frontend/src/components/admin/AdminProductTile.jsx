import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Edit, Trash2 } from 'lucide-react'

const AdminProductTile = ({product, setOpenProductDialog,handleDelete,  setCreateProductFormData, setCurrentEditedId}) => {

  return (
    <Card className="w-full max-w-sm">
    <div>
        <div className='relative'>
        <img src={product.image} alt={product.title} className='rounded-t-lg h-[300px] w-full object-cover'/>

        </div>

        <CardContent className="px-2">
            <h2 className='text-xl font-bold mb-2 text-orange-600'>{product?.title}</h2>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-sm text-black font-normal'>{product.description}</span>


            </div>
            <CardFooter className="flex justify-between gap-12  items-center ">
            <Button className="bg-white border-2 px-2 w-[50%] hover:border-blue-500 " onClick={()=>{
                setOpenProductDialog(true)
                setCurrentEditedId(product._id)
                setCreateProductFormData(product)
            }}><Edit className='text-blue-500 '/></Button>
            <Button onClick={()=>handleDelete(product._id)} className="bg-white border-2 px-2 w-[50%] hover:border-blue-500 ">
            <Trash2  className='text-red-500' />
            </Button>

            </CardFooter>
        </CardContent>
    </div>
      
    </Card>
  )
}

export default AdminProductTile
