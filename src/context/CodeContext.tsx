"use client";
import { createContext, ReactNode, useState } from "react"

export interface CodeInterface {
    style: string, 
    showLineNumbers: string, 
    showHeader: string, 
    shadow: string, 
    fontSize: string, 
    language: string
}

export type CodeType = {
    codeStyles: CodeInterface , 
    setCodeStyles: (arg: CodeInterface) => void
}

export const CodeContext = createContext<CodeType | undefined>(undefined);

export default function CodeContextProvider({children}: {children: ReactNode}) {
    const [codeStyles, setCodeStyles] = useState<CodeInterface>({
        style: "atomOneDark", 
        showLineNumbers: "yes", 
        showHeader: "yes", 
        shadow: "M", 
        fontSize: "10", 
        language: "javascript"
    });

    return(
        <CodeContext.Provider value={{codeStyles, setCodeStyles}}>
            {children}
        </CodeContext.Provider>
    )
}