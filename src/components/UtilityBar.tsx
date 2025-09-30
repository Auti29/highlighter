"yse client";

import { utilityCodeStyles } from "@/data/utilityCodeStyles";
import { useCodeContext } from "@/hooks/useCode";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { LiaRandomSolid } from "react-icons/lia";

export default function UtilityBar() {
    const { setCodeStyles} = useCodeContext();
    const randomize = () => {
        const randomCodeStyles = utilityCodeStyles[Math.floor(Math.random() * utilityCodeStyles.length)];
        setCodeStyles(randomCodeStyles);
    }

  return (
    <div className="min-w-[50%] flex items-center justify-between bg-gray-100 dark:bg-[#1d1d1d] h-12 absolute bottom-0 border border-gray-300 rounded-t-md p-2 dark:border-[#2e2f2ff0] m-auto px-1">
        <button
        onClick={randomize}
        className="flex mx-2 justify-center items-center bg-[#d1d5dc] dark:bg-[#333334] dark:text-white py-1 px-3 text-sm font-semibold rounded-md cursor-pointer"
        >
            <span className="mr-1.5"><LiaRandomSolid 
            size={15}
            /></span>
            <span className="flex-1 text-center ">randomize</span>
        </button>
        <button
        className="bg-[#d1d5dc] mx-2 dark:bg-[#333334] dark:text-white py-1 px-3 text-sm font-semibold rounded-md cursor-pointer"
        >copy to clipboard</button>
        <button
        className="flex  mx-2 justify-center items-center bg-[#102a4c] text-[#50a8ff] py-1 px-3 text-sm font-semibold rounded-md cursor-pointer"
        >
        <span className="mr-1.5">
        <IoCloudDownloadOutline size={15}/>
            </span>
        download
        </button>
    </div>
  );
}