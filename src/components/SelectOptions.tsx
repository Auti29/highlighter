"use client";

import { useState } from "react";
import CustomDropDown from "./ui/CustomDropDown";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { CodeInterface } from "@/context/CodeContext";
import { CgOptions } from "react-icons/cg";


interface SelectOptionsI {
    label: string, 
    values: string[], 
    selected: string , 
    setCodeStyles: (arg: CodeInterface) =>void, 
    state: CodeInterface
}


export default function SelectOptions({label, values, selected, setCodeStyles, state}: SelectOptionsI){
    const [dropDown, setDropDown] = useState<boolean>(false);

    return(
        <div className="pl-1 mb-2.5 font-semibold flex justify-between items-center">
            <span className="font-semibold text-[13px] text-black dark:text-white">{label}</span>
            <div className="relative">
            <div
            onClick={() => setDropDown(prev => !prev)} 
            className="cursor-pointer flex items-center justify-between py-2 px-2 rounded-md bg-gray-300 text-sm w-38 dark:bg-[#232323] dark:text-white">
                    <span>{
                            selected
                        }</span>
                        <CgOptions  size={17}/>
                    
            </div>
                    {   
                        dropDown &&
                        <CustomDropDown values={values} selected={selected} label={label} setDropDown = {setDropDown}/>
                    }

            </div>
        </div>
    )
}