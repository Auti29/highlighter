import { Dispatch, SetStateAction } from "react";

export type SnippetType = {
    snippet: string;
    setSnippet: React.Dispatch<React.SetStateAction<string>>;
}


export interface FrameInterface  {
    visible?: string , 
    padding?: string ,
    radius?: string , 
    background?: string  
}

export type FrameType = {
    frame: FrameInterface | undefined, 
    setFrame: Dispatch<SetStateAction<FrameInterface>> , 
};