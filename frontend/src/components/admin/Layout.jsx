import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './Sidebar'
import AdminHeader from './Header'

function AdminLayout() {

  const [openSidebar, setOpenSideBar] = useState(false)
  return (
    <div className='flex min-h-screen w-full '>
        <AdminSidebar openSidebar={openSidebar} setOpenSideBar={setOpenSideBar}/>

        <div className="flex flex-1 flex-col">
            <AdminHeader setOpenSideBar ={setOpenSideBar}/>
            <main className='flex bg-muted/40 flex-1 p-4 md:p-6'>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default AdminLayout
