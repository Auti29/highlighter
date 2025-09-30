"use client";

import { ToastContext } from "@/context/ToastContext"
import { useContext } from "react"

export const useToast = () => {
    const context = useContext(ToastContext);
    if(!context){
        throw new Error("toast context is not defined");
    }
    return context;
}