import { ShopContext } from "@/context/ShopContext";
import type { ReactNode } from "react";

export const ShopProvider = ({ children }: { children: ReactNode }) => {
    const value = {}
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
};