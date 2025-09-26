import type { ShopContextProps } from "@/types";
import { createContext } from "react";

export const ShopContext = createContext<ShopContextProps | undefined>(undefined) 