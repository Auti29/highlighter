"use client"

import useInputSidebar from "@/hooks/useInputSidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import InputCode from "./InputCode";

export default function InputSideBar() {
    const {isVisible, setIsVisible} = useInputSidebar(); 
    return (
        <div 
        id="input-sidebar"
        className={`h-[75%] w-75 lg:hidden bg-white fixed right-0 border-t-1 border-l-1 border-b-1 border-gray-400 rounded-tl-lg rounded-bl-lg ${isVisible ? "block" : "translate-x-full"} dark:bg-[#151516] z-50 dark:border-gray-600 p-3 `}>
            <button 
            onClick={() => setIsVisible(false)}
            className="flex items-center justify-center py-0.5 mb-2 rounded-md cursor-pointer  mr-2 font-bold text-lg  lg:hidden dark:text-white text-black">
                <MdKeyboardDoubleArrowRight />
            </button>
            <InputCode />
        </div>
    );
}