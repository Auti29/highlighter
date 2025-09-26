"use client";

import { ThemeContext } from "@/context/ThemeContext"
import { error } from "console";
import { useContext } from "react"

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("No theme context provided");
    }

    return context;
}