import {  createContext, ReactNode, useState } from "react"


export const EditSidebar = createContext<undefined | {isVisible: boolean, setIsVisible: (arg: boolean) => void}>(undefined);

export default function EditSidebarContext({children}: {children: ReactNode}) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return(
        <EditSidebar.Provider value={{isVisible, setIsVisible}}>
            {children}
        </EditSidebar.Provider>
    )
}