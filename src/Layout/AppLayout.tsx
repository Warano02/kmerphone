import Footer from "@/components/Footer"
import Header from "@/components/Header"
import WorkflowDelivery from "@/components/WorkflowDelivery"
import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router"

function AppLayout() {
    const [isHome,setIsHome]=useState(false)
    const location=useLocation()
    useEffect(()=>{
       setIsHome(location.pathname==="/")
    },[location.pathname])
    return (
        <>
            <Header />
            <div className={`${!isHome&& "mt-[150px]"}`}>
                 <Outlet />
            </div>

            <WorkflowDelivery />
            <Footer />
        </>
    )
}

export default AppLayout