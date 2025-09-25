"use client";
import { useFrame } from "@/hooks/useFrame";
import {useSnippet} from "../hooks/useSnippet";
import { getRgb } from "@/utils/getRgb";
import { CSSProperties, useEffect, useRef, useState } from "react";
import SyntaxHighlighter, { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { agate, ascetic, atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Style } from "util";

enum borderRadEnum {
    "N/A"= "0", 
    "S"= "10", 
    "M"="20", 
    "L"="30"
}



export default function MainEditor(){
    const {frame,} = useFrame();
    const [topBarBg, setTopBarBg] = useState<string>("");
    const [currStyle, ] = useState<{[key: string]: CSSProperties;}>(atomOneDark);
    const { snippet } = useSnippet();
    const highlighterRef = useRef<HTMLDivElement>(null);
    
useEffect(() => {
    const pre = highlighterRef.current?.querySelector("pre");
    if (pre) {
        const bg = window.getComputedStyle(pre).backgroundColor;
        const rgb  = getRgb(bg);
        if (!rgb) return;
        const newRgb = rgb.map(c => {
            if(c-10 > 0) return c-10;
            return c;
        });
        const darkerBg = `rgb(${newRgb[0]}, ${newRgb[1]}, ${newRgb[2]})`;
        setTopBarBg(darkerBg);
        // console.log(darkerBg);
    }
}, []);
  
    return(
        <div className="w-[53%] h-full flex justify-center items-center overflow-auto border border-gray-300 rounded-md bg-gray-100">
            <div 
            className="w-[90%] py-20 border-0 rounded-md flex justify-center items-center"
            style={frame ?
                {
                    paddingLeft: (Number(frame.padding)*4).toString() + "px",  
                    paddingRight:  (Number(frame.padding)*4).toString() + "px", 
                    borderRadius: frame.radius ? borderRadEnum[frame.radius as keyof typeof borderRadEnum] + "px" : "0px", 
                    background: frame.visible === "No"  ?  "none" : frame.background!, 
                } 
                : 
                undefined
            }
            >
            <div className="w-[90%] border-3 border-black rounded-2xl bg-black">
            <div className={`w-full  h-11 rounded-t-2xl flex items-center border-r-3  border-gray-400`}
            style={
                { backgroundColor: topBarBg || "#1f2937" }
            }
            >
                <div className="w-15 h-fit flex justify-between ml-3">
                    <span className="w-4 h-4 max-sm:w-2 max-sm:h-2 rounded-full bg-red-500"></span>
                    <span className="w-4 h-4 max-sm:w-2 max-sm:h-2 rounded-full bg-yellow-500"></span>
                    <span className="w-4 h-4 max-sm:w-2 max-sm:h-2 rounded-full bg-green-500"></span>
                </div>
            </div>
            <div
            ref = {highlighterRef}
            className={`w-full`}>

            <SyntaxHighlighter
            className="w-full border-b-3  border-r-3  border-gray-400 rounded-b-2xl"
            language="javascript" 
            customStyle={{
                paddingBottom: "20px",
            }}
            style={currStyle}
            showLineNumbers={true}
            >
{snippet ||  `import React from 'react';

export default function App() {
    return (
        <div>
        <h1>Hello, world!</h1>
        </div>
    );
}
                `}
            </SyntaxHighlighter>
            </div>
            </div>
            </div>
        </div>
    )
}