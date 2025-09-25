import { SnippetContext } from "@/context/SnippetContext";
import { useContext } from "react";

export const  useSnippet = () => {
    const context = useContext(SnippetContext);
    if(context === undefined){
        throw new Error("SnippetContext is not defined");
    }

    return context;
}