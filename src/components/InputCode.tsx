"use client";
import { useRef } from "react";
import {useSnippet} from "../hooks/useSnippet";
import Heading from "./Heading";

export default function InputCode() {
    const { snippet, setSnippet } = useSnippet();
    const textAreaRef = useRef(null);
    return (
        <div className="w-[23%] h-full ">
        <Heading text="Paste your code here..." />
         <div className="h-[90%] w-full flex justify-center ">
            <textarea
            spellCheck={false}
            tabIndex={-1}
            ref = {textAreaRef}
            className="w-full h-[80%] border border-gray-400 p-2 rounded-md font-mono bg-gray-200 dark:bg-[#232323] dark:text-white dark:border-[#2e2f2ff0] resize-none"
            placeholder="start typing..."
            value={snippet}
            onChange={(e) => setSnippet(e.target.value)}
            ></textarea>
         </div>
        </div>
    )
}