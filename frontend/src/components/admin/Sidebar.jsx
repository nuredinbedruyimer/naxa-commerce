import { ChartNoAxesCombined } from 'lucide-react'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuItems from './MenuItems'
import { SheetContent, SheetHeader, SheetTitle, Sheet } from '../ui/sheet'

const AdminSidebar = ({openSidebar, setOpenSideBar}) => {

  const navigate = useNavigate()
  return (
    <Fragment>

    <Sheet open={openSidebar} onOpenChange = {setOpenSideBar}>

      <SheetContent side ="left" className="w-72">
      <div className='flex flex-col h-full'>
       <SheetHeader>
        <SheetTitle className="flex gap-2">
        <ChartNoAxesCombined size={24}/>
        <span>Admin Panel</span>

        </SheetTitle>
       </SheetHeader>
       <MenuItems setOpenSideBar={setOpenSideBar}/>
      </div>

      </SheetContent>
    </Sheet>
    <aside className=' hidden border-r w-72 bg-background flex-col p-6 lg:flex'>
      <div onClick={()=>navigate("/admin/dashboard")} className='flex items-center cursor-pointer  gap-1'>
      <ChartNoAxesCombined size={24} />
      <h1 className=' text-xl font-semibold'> Admin Panel</h1>

      
      </div>
      <MenuItems/>

    </aside>
       
    </Fragment>
  )
}

export default AdminSidebar
