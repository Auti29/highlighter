"use client";

import { CodeContext } from "@/context/CodeContext"
import { useContext } from "react"

export const useCodeContext = () => {
    const context = useContext(CodeContext);
    if(context === undefined) {
        throw new Error("code context is not defined");
    }
    return context;
}