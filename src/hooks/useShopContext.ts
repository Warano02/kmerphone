import { ShopContext } from "@/context/ShopContext"
import { useContext } from "react"
export const useShopContext = () => {
  const ctx = useContext(ShopContext)
  if (!ctx) {
    throw new Error("useAppContext must be used inside <ShopProvider>")
  }
  return ctx
}
