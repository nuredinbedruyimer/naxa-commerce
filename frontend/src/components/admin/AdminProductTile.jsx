import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'

const AdminProductTile = ({product, setOpenProductDialog, setCreateProductFormData, setCurrentEditedId}) => {
  return (
    <Card className="w-full max-w-sm mx-auto">
    <div>
        <div className='relative'>
        <img src={product.image} alt={product.title} className='rounded-t-lg h-[300px] w-full object-cover'/>

        </div>

        <CardContent>
            <h2 className='text-xl font-bold mb-2'>{product?.title}</h2>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-lg font-semibold text-primary'>${product.price}</span>
              <span>${product.salePrice}</span>


            </div>
            <CardFooter className="flex justify-between items-center">
            <Button onClick={()=>{
                setOpenProductDialog(true)
                setCurrentEditedId(product._id)
                setCreateProductFormData(product)
            }}>Update</Button>
            <Button>Delete</Button>

            </CardFooter>
        </CardContent>
    </div>
      
    </Card>
  )
}

export default AdminProductTile
