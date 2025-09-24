import { SnippetContext } from "@/context/SnippetContext";
import { useContext } from "react";

export default function useSnippet(){
    const context = useContext(SnippetContext);
    if(context === undefined){
        throw new Error("SnippetContext is not defined");
    }

    return context;
}