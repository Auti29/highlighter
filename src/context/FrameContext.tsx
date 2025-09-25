"use client";

import { FrameInterface, FrameType } from "@/types/type";
import { createContext, useState } from "react";

export const FrameContext = createContext<FrameType | undefined>(undefined);

export default function FrameContextProvider({children}:{children:React.ReactNode}){
    const [frame, setFrame] = useState<FrameInterface>({
        padding: null, 
        radius: null, 
        visible: null, 
        background: null, 

    });

    return(
        <FrameContext.Provider value={{frame, setFrame}}>
            {children}
        </FrameContext.Provider>
    )
}