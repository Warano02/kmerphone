import type { AppContextProps } from "@/types";
import { createContext } from "react";

export const AppContext = createContext<AppContextProps | undefined>(undefined) 