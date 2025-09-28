import { AppContext } from "@/context/AppContext"
import { useState, type ReactNode } from "react"

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const AppName = "Kmerphone"
    const utilsLinks={
        whatsapp:"https://wa.me/237621092130",
        email:"carineteoi@gmail.com"
    }
    const [isSearching, setIsSearching] = useState(false);
    const value = { AppName, isSearching, setIsSearching,utilsLinks }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}