"use client";
import { createContext, ReactNode, useState } from "react"

export interface CodeInterface {
    themes: string, 
    linenumbers: string, 
    header: string, 
    shadow: string, 
    language: string
}

export type CodeType = {
    codeStyles: CodeInterface , 
    setCodeStyles: (arg: CodeInterface) => void
}

export const CodeContext = createContext<CodeType | undefined>(undefined);

export default function CodeContextProvider({children}: {children: ReactNode}) {
    const [codeStyles, setCodeStyles] = useState<CodeInterface>({
        themes: "codedarkDark", 
        linenumbers: "show", 
        header: "show", 
        shadow: "M", 
        language: "javascript"
    });

    return(
        <CodeContext.Provider value={{codeStyles, setCodeStyles}}>
            {children}
        </CodeContext.Provider>
    )
}