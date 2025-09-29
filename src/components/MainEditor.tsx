"use client";
import { useFrame } from "@/hooks/useFrame";
import {useSnippet} from "../hooks/useSnippet";
import { getRgb } from "@/utils/getRgb";
import { CSSProperties, useEffect, useRef, useState } from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { useCodeContext } from "@/hooks/useCode";
import { themeMappings } from "@/data/themeMappings";
import { coldarkDark, xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";


enum borderRadEnum {
    "N/A"= "0", 
    "S"= "10", 
    "M"="20", 
    "L"="30"
}



export default function MainEditor(){
    const {frame,} = useFrame();
    const {codeStyles, } = useCodeContext();
    const [topBarBg, setTopBarBg] = useState<string>("");
    const [boxBg, setBoxBg] = useState<string>("");
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
        setBoxBg(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
        console.log(darkerBg);
        setTopBarBg(darkerBg);
    }
}, [codeStyles.themes]);

    return(
        <div className="w-[53%] h-full flex justify-center items-center overflow-auto border border-gray-300 rounded-md dark:bg-[#0f0f10] dark:border-[#2e2f2ff0]">
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
            <div className="w-[90%] rounded-2xl bg-none flex flex-col justify-center">
            <div
            ref = {highlighterRef}
            className="w-full flex-1">
                <div className={`w-full  h-11 rounded-t-2xl flex items-center `}
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
            <SyntaxHighlighter      
            customStyle={{
                    borderRadius: "0 0 8px 8px", 
                    margin: "0px", 
                                        padding: "10px 35px 10px 10px",
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)',
                }}
  
            language={codeStyles.language.toLowerCase() || "javascript"}
            style={themeMappings[codeStyles.themes] || coldarkDark}
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