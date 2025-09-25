"use client";

import { FrameInterface, FrameType } from "@/types/type";
import { createContext, useEffect, useState } from "react";

export const FrameContext = createContext<FrameType | undefined>(undefined);

export default function FrameContextProvider({children}:{children:React.ReactNode}){
    const [frame, setFrame] = useState<FrameInterface>({
        padding: "10", 
        radius: "M", 
        visible: "Yes", 
        background: "#2b7fff", 

    });

    return(
        <FrameContext.Provider value={{frame, setFrame}}>
            {children}
        </FrameContext.Provider>
    )
}