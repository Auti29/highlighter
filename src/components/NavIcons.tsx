"use client";

import GithubIcon from "./icons/GithubIcon";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";
import { FaRegPaste } from "react-icons/fa6";
import { LuWandSparkles } from "react-icons/lu";
import useInputSidebar from "@/hooks/useInputSidebar";
import useEditSidebar from "@/hooks/useEditSidebar";


export default function NavIcons(){
    const {theme , toggleTheme} = useTheme();
    const { setIsVisible } = useInputSidebar();
    const { setIsVisible:setEditSidebarVisible } = useEditSidebar();
    return(
        <div className="flex justify-center items-center px-2 dark:text-white"> 
            <button 
            onClick={() => setEditSidebarVisible(prev => !prev)}
            className="flex px-2 items-center justify-center py-0.5 border border-gray-400 dark:border-gray-600 rounded-md cursor-pointer dark:bg-[#232323] bg-gray-300 mr-2 font-semibold  lg:hidden">
                <LuWandSparkles className="text-sm mr-1"/>
                <span className="text-xs text-center mb-0.5">edit</span>
            </button>

            <button 
            onClick={() => setIsVisible(prev => !prev)}
            className="flex px-2 items-center justify-center py-0.5 border border-gray-400 dark:border-gray-600 rounded-md cursor-pointer dark:bg-[#232323] bg-gray-300 mr-2 font-semibold  lg:hidden">
                <FaRegPaste className="text-sm mr-1"/>
                <span className="text-xs text-center mb-0.5">paste code</span>
            </button>
            <button
            onClick={() => {
                toggleTheme();
            }}
            className="p-1.5 mr-2 hover:bg-gray-300 rounded-md cursor-pointer dark:hover:text-black">
            {theme === "dark" ? <IoSunnyOutline size={20}/> : <IoMoonOutline size={20}/>}
            </button>
            <Link href={"https://github.com/Auti29/highlighter"} target="__black">
            <GithubIcon />
            </Link>
        </div>
    )
}