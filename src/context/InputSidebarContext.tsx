"use client";

import { ReactNode, useState, Dispatch, SetStateAction, createContext } from "react";

type InputSidebarType = {isVisible: boolean, setIsVisible: Dispatch<SetStateAction<boolean>>};


export const InputSidebarContext = createContext<InputSidebarType | undefined>(undefined);

export default function InputSidebarProvider({children}: {children: ReactNode}) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return (    
        <InputSidebarContext.Provider value={{isVisible, setIsVisible}}>
            {children}
        </InputSidebarContext.Provider>
    )
}