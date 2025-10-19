"use client";

import { EditSidebarContext } from "@/context/EditSidebar";
import { useContext } from "react";


export default function useEditSidebar(){
    const context = useContext(EditSidebarContext);
    if(!context || context === undefined) throw new Error("Edit context is undefined!!!");

    return context;
}