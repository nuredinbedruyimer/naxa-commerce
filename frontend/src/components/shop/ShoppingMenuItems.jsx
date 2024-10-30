import { shoppingPageMenuItems } from '@/config'
import React from 'react'
import { Link } from 'react-router-dom'

const ShoppingMenuItems = () => {

  return (
    <div className='flex flex-col lg:mb-0 lg:items-center lg:flex-row gap-6'>
    {
        shoppingPageMenuItems.map((shopItem, index)=><Link key={index} className='text-sm font-semibold' to={shopItem.path}>{shopItem.label}</Link>)
    }
      
    </div>
  )
}

export default ShoppingMenuItems
