import React from 'react'
import { AlignJustify, LogOutIcon } from 'lucide-react'
import { Button } from '../ui/button'

const AdminHeader = ({setOpenSideBar}) => {
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background'>
    <Button onClick ={()=> setOpenSideBar(true)} className="lg:hidden sm:block">
    <AlignJustify />
    <span className='sr-only'>Toggle Menu</span>
    </Button>
    <div className='flex flex-1 justify-end'>

    <Button className="inline-flex border-2 text-sm font-medium border-lime-800 bg-background rounded-sm text-black hover:bg-gray-100 px-4 py-2">
    <LogOutIcon className=''/>
    Logout
    </Button>
 
    </div>
 
      
    </header>
  )
}

export default AdminHeader
