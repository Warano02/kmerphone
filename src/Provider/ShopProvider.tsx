import { ShopContext } from "@/context/ShopContext";
import type { SingleCommand } from "@/types";
import { useEffect, useState, type ReactNode } from "react";

export const ShopProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<SingleCommand[]>([])
    useEffect(() => {
        if (!cart) return
        console.log(cart)
    }, [cart])

    const addToCart = ({ id, color, qte, price, normalPrice, desc, img }: SingleCommand) => {
        if (!cart.length) return setCart([{ id, color, qte, price, normalPrice, desc, img }])
        const exist = cart.some((el) => el.id === id)
        if (exist) {
            return setCart((prev) => prev.map((el) => {
                return el.id === id ? { ...el, color, qte } : el
            }))
        }
        return setCart((prev) => { return [...prev, { id, color, qte, price, normalPrice, desc, img }] })
    }
    const deleteFromCart = (id: string) => setCart((cart) => cart.filter((el) => el.id != id))


    const value = { cart, setCart, addToCart, deleteFromCart }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
};