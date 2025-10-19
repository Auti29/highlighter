import { EditSidebar } from "@/context/EditSidebar";
import { useContext } from "react";


export default function useEditSidebar(){
    const context = useContext(EditSidebar);
    if(!context || context === undefined) throw new Error("Edit context is undefined!!!");

    return context;
}