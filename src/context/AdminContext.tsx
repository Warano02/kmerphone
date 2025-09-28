import type { AdminProviderInterface } from "@/types";
import { createContext } from "react";

export const AdminContext = createContext<AdminProviderInterface | undefined>(undefined) 