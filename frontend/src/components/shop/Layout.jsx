import React from 'react'
import { Outlet } from 'react-router-dom'
import ShopHeader from './Header'

const ShopLayout = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
        <ShopHeader/>
        <main className='flex flex-col w-full'>
             <Outlet/>
        </main>
    </div>
  )
}

export default ShopLayout
