"use client";

import { InputSidebarContext } from "@/context/InputSidebarContext";
import { useContext } from "react";

export default function useInputSidebar() {
    const context = useContext(InputSidebarContext);
    if(!context){
        throw new Error("input sidebar context is undefined!!");
    }

    return context;
}