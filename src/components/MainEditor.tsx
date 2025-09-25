"use client";
import useSnippet from "@/hooks/useSnippet";
import { getRgb } from "@/utils/getRgb";
import { CSSProperties, useEffect, useRef, useState } from "react";
import SyntaxHighlighter, { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { agate, ascetic, atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function MainEditor(){
    const [topBarBg, setTopBarBg] = useState<string>("");
    const [currStyle, setCurrStyle] = useState<{[key: string]: CSSProperties;}>(atomOneDark);
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
        console.log(darkerBg);
    }
}, []);
  
    return(
        <div className="w-[53%] h-full flex justify-center items-center overflow-auto border border-gray-300 rounded-md">
            <div className="w-[90%] pt-5 pb-5 border-0 rounded-md flex justify-center items-center bg-blue-400">
            <div className="w-[90%] border-3 border-black rounded-2xl bg-black">
            <div className={`w-full  h-13 rounded-t-2xl flex items-center border-t-3 border-l-3 border-r-3 border-gray-500`}
            style={
                { backgroundColor: topBarBg || "#1f2937" }
            }
            >
                <div className="w-15 h-fit flex justify-between ml-4">
                    <span className="w-4 h-4 max-sm:w-2 max-sm:h-2 rounded-full bg-red-500"></span>
                    <span className="w-4 h-4 max-sm:w-2 max-sm:h-2 rounded-full bg-yellow-500"></span>
                    <span className="w-4 h-4 max-sm:w-2 max-sm:h-2 rounded-full bg-green-500"></span>
                </div>
            </div>
            <div
            ref = {highlighterRef}
            className={`w-full`}>

            <SyntaxHighlighter
            className="w-full border-b-3 border-l-3 border-r-3 border-gray-500 rounded-b-2xl"
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