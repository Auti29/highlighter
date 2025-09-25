"use client";
import {useSnippet} from "../hooks/useSnippet";
import Heading from "./Heading";

export default function InputCode() {
    const { snippet, setSnippet } = useSnippet();
    return (
        <div className="w-[23%] h-full">
        <Heading text="Paste your code here..." />
         <div className="h-full w-full flex justify-center ">
            <textarea
            className="w-full min-h-[60%] max-h-[80%] border border-gray-300 p-2 rounded-md font-mono bg-gray-100"
            placeholder="start typing..."
            value={snippet}
            onChange={(e) => setSnippet(e.target.value)}
            ></textarea>
         </div>
        </div>
    )
}