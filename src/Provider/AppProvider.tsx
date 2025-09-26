import { AppContext } from "@/context/AppContext"
import { useState, type ReactNode } from "react"

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const AppName = "Kmerphone"
    const [isSearching, setIsSearching] = useState(false);
    const value = { AppName, isSearching, setIsSearching }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}