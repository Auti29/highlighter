"use client";

import { FrameInterface, FrameType } from "@/types/type";
import { createContext, useState } from "react";

export const FrameContext = createContext<FrameType | undefined>(undefined);

export default function FrameContextProvider({children}:{children:React.ReactNode}){
    const [frame, setFrame] = useState<FrameInterface | undefined>(undefined);

    return(
        <FrameContext.Provider value={{frame, setFrame}}>
            {children}
        </FrameContext.Provider>
    )
}