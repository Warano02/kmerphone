import Footer from "@/components/Footer"
import Header from "@/components/Header"
import WorkflowDelivery from "@/components/WorkflowDelivery"
import { Outlet } from "react-router"

function AppLayout() {
    return (
        <>
            <Header />
       <div className="mt-[40px] ">
             <Outlet />
       </div>
            <WorkflowDelivery />
            <Footer />
        </>
    )
}

export default AppLayout