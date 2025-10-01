"use client";

import { utilityCodeStyles } from "@/data/utilityCodeStyles";
import { useCodeContext } from "@/hooks/useCode";
import { useToast } from "@/hooks/useToast";
import { copyAsBlob } from "@/utils/copyAsBlob";
import { downloadImg } from "@/utils/downloadImage";
import { RefObject, useState } from "react";
import { IoCloudDownloadOutline, IoCloudDownloadSharp, IoCopyOutline } from "react-icons/io5";
import { LiaRandomSolid } from "react-icons/lia";

export default function UtilityBar({codeElemRef}: {codeElemRef: RefObject<HTMLDivElement | null>}) {
    const { setCodeStyles} = useCodeContext();
    const [downloadClicked, setDownloadClicked] = useState<boolean>(false);

    const {invokeToast} = useToast();

    const handleCopy = async () => {
        if (!codeElemRef?.current) return;
        
        try {
            await copyAsBlob(codeElemRef.current);
            invokeToast();
            
        } catch (err) {
            console.error("Copy failed:", err);
        }
    }

    const downloadSnippet = async () => {
        if(!codeElemRef?.current) return;
        setDownloadClicked(true);

        try{
            await downloadImg(codeElemRef.current);
            await new Promise((res) => setTimeout(() => setDownloadClicked(false), 1500));
            return;
        }
        catch(err){
            console.log("download failed: ", err);
            setDownloadClicked(false);
            return;
        }
    }


    const randomize = () => {
        const randomCodeStyles = utilityCodeStyles[Math.floor(Math.random() * utilityCodeStyles.length)];
        setCodeStyles(randomCodeStyles);
    }

  return (
    <div className="min-w-[50%] flex items-center justify-between bg-gray-200 dark:bg-[#1d1d1d] h-12 absolute bottom-0 border-b border-t border-l border-r border-gray-400 rounded-t-md p-2 dark:border-[#2e2f2ff0] m-auto px-1 ">
        <button
        onClick={randomize}
        className="flex mx-2 border border-gray-400 justify-center items-center dark:hover:bg-[#4b4a4a] bg-[#d1d5dc] dark:bg-[#333334] dark:text-white py-1 px-3 text-sm font-semibold rounded-md cursor-pointer hover:bg-[#9a9da2]"
        >
            <span className="mr-2"><LiaRandomSolid 
            size={16}
            /></span>
            <span className="flex-1 text-center ">randomize</span>
        </button>
        <button
        onClick={() => handleCopy()}
        className="flex mx-2 justify-center border border-gray-400 items-center hover:bg-[#9a9da2] dark:hover:bg-[#4b4a4a] bg-[#d1d5dc] dark:bg-[#333334] dark:text-white py-1 px-3 text-sm font-semibold rounded-md cursor-pointer"
        >
            <span className="mr-2"><IoCopyOutline 
            size={16}
            /></span>
            <span className="flex-1 text-center ">copy to clipboard</span>
        </button>
        <button
        disabled={downloadClicked}
        onClick={downloadSnippet}
        className="
        bg-[#97c6f5] border border-[#102a4c] text-[#102a4c] 
        flex  mx-2 justify-center items-center dark:bg-[#102a4c] dark:hover:bg-[#304157] dark:text-[#50a8ff] py-1 px-3 text-sm rounded-md cursor-pointer font-bold hover:bg-[#53a4f5]"
        >
        <span className="mr-2">
            {
            downloadClicked ? 
            <IoCloudDownloadSharp size={15}/>
            :
            <IoCloudDownloadOutline size={15}/>
            }
        </span>
        <span
        className=""
        >{downloadClicked ? 'downloading...' :`download`}</span>
        </button>
    </div>
  );
}