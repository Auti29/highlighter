import { FaRegMoon } from "react-icons/fa";
import GithubIcon from "./icons/GithubIcon";
import { IoMoonOutline } from "react-icons/io5";
import Link from "next/link";


export default function NavIcons(){
    return(
        <div className="flex justify-center items-center px-2"> 
            <div className="p-1.5 mr-2 hover:bg-gray-300 rounded-md cursor-pointer">
            <IoMoonOutline size={20}/>
            </div>
            <Link href={"https://github.com/Auti29/highlighter"} target="__black">
            <GithubIcon />
            </Link>
        </div>
    )
}