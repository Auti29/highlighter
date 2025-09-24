"use client";

import { createContext, useState } from "react";
import { SnippetType } from "@/types/type";

export const SnippetContext = createContext<SnippetType | undefined>(undefined);

export default function SnippetContextProvider({children}:{children:React.ReactNode}){
    const [snippet, setSnippet] = useState<string>("");

    return(
        <SnippetContext.Provider value={{snippet, setSnippet}}>
            {children}
        </SnippetContext.Provider>
    )
}