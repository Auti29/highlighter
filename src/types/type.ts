import { Dispatch, SetStateAction } from "react";

export type SnippetType = {
    snippet: string;
    setSnippet: React.Dispatch<React.SetStateAction<string>>;
}


export interface FrameInterface  {
    visible?: boolean, 
    padding?: number,
    radius?: number, 
    background?: string 
}

export type FrameType = {
    frame: FrameInterface | undefined, 
    setFrame: Dispatch<SetStateAction<FrameInterface | undefined>> , 
};