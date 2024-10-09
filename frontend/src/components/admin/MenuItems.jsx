import { LayoutDashboard, Logs, ShoppingBasket } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export const adminSidebarMenuItems = [
    {
        id : "dashboard", 
        name:"Dashboard", 
        path:"/admin/dashboard",
        icon:<LayoutDashboard />
    }, 
    {
        id : "orders", 
        name:"Orders", 
        path:"/admin/orders", 
        icon:<Logs />
    }, 

    {
        id : "products", 
        name:"Products", 
        path:"/admin/products",
        icon:<ShoppingBasket />
    }
]

const MenuItems = ({setOpenSideBar}) => {
    const navigate = useNavigate()
  return (
    <nav className='mt-8 flex flex-col gap-3'>
    {
        adminSidebarMenuItems.map(item=>(
            <div onClick ={()=>{
                navigate(item.path),
                setOpenSideBar ? setOpenSideBar(false) : null
            }} className='flex cursor-pointer text-muted-foreground hover:bg-muted hover:text-foreground items-center gap-2 rounded-md px-3 py-2' key={item.id}>
            {item.icon}
            <span>{item.name}</span>

            </div>
        ))
    }
      
    </nav>
  )
}

export default MenuItems
