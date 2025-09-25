import { FrameContext } from "@/context/FrameContext"
import { useContext } from "react"


export const useFrame  = () => {
    const context = useContext(FrameContext);
    if(context === undefined){
        throw new Error("SnippetContext is not defined");
    }

    return context;
}