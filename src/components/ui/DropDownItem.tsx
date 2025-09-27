"use client";

import { CodeInterface } from "@/context/CodeContext";
import { useCodeContext } from "@/hooks/useCode";

export default function DropDownItem({val, selected, label, setDropDown}:{val:string, selected: string, label: string, setDropDown: (arg: boolean) => void}) {

    const { codeStyles, setCodeStyles } = useCodeContext();

    const handleSelection = (val:string) => {
        if(val.toLowerCase() === selected?.toLowerCase()) return;
        const temp = {...codeStyles};
        for(const key of Object.keys(temp) as (keyof CodeInterface)[]){
            if(key.toLowerCase() === label.toLowerCase()){
                temp[key] = val;
                break;
            }
        }
        setDropDown(false);
        setCodeStyles(temp);
    }
    


    return(
        <span
        onClick={() => handleSelection(val)}
        className="w-[90%] rounded-md my-1 px-2 py-2 hover:bg-[#404040] hover:text-white cursor-pointer">{val}</span>
    );
}