import { AppContext } from "@/context/AppContext"
import type { ReactNode } from "react"

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const AppName = "Kmerphone"
    const value = { AppName }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}