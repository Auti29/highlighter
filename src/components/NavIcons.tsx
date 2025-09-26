"use client";

import GithubIcon from "./icons/GithubIcon";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";


export default function NavIcons(){
    const {theme , toggleTheme} = useTheme();
    return(
        <div className="flex justify-center items-center px-2 dark:text-white"> 
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