import { ShopContext } from "@/context/ShopContext";
import type { SingleCommand } from "@/types";
import { useEffect, useState, type ReactNode } from "react";

export const ShopProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<SingleCommand[]>([])
    useEffect(() => {
        if (!cart) return
        console.log(cart)
    }, [cart])

    const addToCart = ({ id, color, qte }: SingleCommand) => {
        if (!cart.length) return setCart([{ id, color, qte }])
        const exist = cart.some((el) => el.id === id)
        if (exist) {
            const newCart = cart.map((el) => {
                return el.id === id ? { ...el, color, qte } : el
            })
            return setCart(newCart)
            alert("produit modifié avec succès")
        }
        return setCart((prev) => { return [...prev, { id, color, qte }] })
    }
    const deleteFromCart = (id: string) => {
        const newCart = cart.filter((el) => el.id != id)
        setCart(newCart)
    }

    const value = { cart, setCart, addToCart,deleteFromCart }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
};