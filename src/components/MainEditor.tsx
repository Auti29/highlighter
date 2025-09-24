import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function MainEditor(){
    return(
        <div className="w-[50%] h-full flex justify-center items-center overflow-auto border border-gray-300 rounded-md">
            <div className="w-[90%] pt-5 pb-5 border-0 rounded-md flex justify-center items-center bg-gray-400">
            <div className="w-[90%] border-2 border-black rounded-md">
            <SyntaxHighlighter
            className="w-full border-2 border-gray-500 rounded-md"
            language="javascript" style={atomOneDark}
            showLineNumbers={true}
            >
{`import React from 'react';

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
    )
}