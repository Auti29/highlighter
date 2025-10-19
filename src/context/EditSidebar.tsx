"use client";

import {  createContext, ReactNode, useState } from "react"


export const EditSidebarContext = createContext<undefined | {isVisible: boolean, setIsVisible: (arg: boolean) => void}>(undefined);

export default function EditSidebarProvider({children}: {children: ReactNode}) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return(
        <EditSidebarContext.Provider value={{isVisible, setIsVisible}}>
            {children}
        </EditSidebarContext.Provider>
    )
}