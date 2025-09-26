import { ShopContext } from "@/context/ShopContext"
import { useContext } from "react"
export const useShopContext = () => {
  const ctx = useContext(ShopContext)
  return ctx
}
