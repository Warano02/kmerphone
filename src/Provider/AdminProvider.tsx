import { AdminContext } from "@/context/AdminContext";
import type React from "react";

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
    const name = "Warano" // just dummy
    const value = { name }
    return <AdminContext.Provider value={value}>
        {children}
    </AdminContext.Provider>
}