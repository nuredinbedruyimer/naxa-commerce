import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className='flex min-h-screen w-full'>
      <div className='hidden lg:flex items-center justify-center bg-lime-700 w-1/2 px-12'>
      <div className="max-w-md space-x-6 text-center text-primary-foreground">
        <h1 className='text-5xl tracking-normal font-extrabold'> Welcome to NaxaCommerce</h1>
      </div>

      </div>

      <div className='flex flex-1 justify-center items-center px-4 py-12 bg-background sm:px-6 lg:px-8'>
        <Outlet/>

      </div>
  
    </div>
  )
}

export default AuthLayout
