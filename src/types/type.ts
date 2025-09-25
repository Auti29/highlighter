import { Dispatch, SetStateAction } from "react";

export type SnippetType = {
    snippet: string;
    setSnippet: React.Dispatch<React.SetStateAction<string>>;
}


export interface FrameInterface  {
    visible?: string | null, 
    padding?: string | null,
    radius?: string | null, 
    background?: string | null 
}

export type FrameType = {
    frame: FrameInterface | undefined, 
    setFrame: Dispatch<SetStateAction<FrameInterface>> , 
};