import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const CheckAuth = ({isAuthenticated, user, children}) => {

    const location = useLocation()
    console.log("I am In CheckOut", location.pathname, isAuthenticated, user)

    


    if (!isAuthenticated && !(location.pathname.includes("/login") || location.pathname.includes("/register"))){
        return <Navigate to= "/auth/login"/>
    }
    if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/register"))){
        if (user?.role === "ADMIN"){
        return <Navigate to= "/admin/dashboard"/>

        }else{
        return <Navigate to= "/shop/home"/>
        
        }
    }
    if (isAuthenticated && user?.role !=="ADMIN" && location.pathname.includes("admin")){
        return <Navigate to= "/not-allowed"/>
        
    }

    if (isAuthenticated && user?.role === "ADMIN" && location.pathname.includes("shop")){
        return <Navigate to= "/admin/dashboard"/>

    }
    return <>{children}</>

}

export default CheckAuth
