"use client";

import { FrameInterface } from "@/types/type";

interface OptionSelectorInterface {
    label: string, 
    values: string[],  
    selected?: string | null, 
    setSelected?: (val: FrameInterface ) => void , 
    frame?: FrameInterface,
}

export default function OptionSelector({label, values, selected, setSelected, frame}: OptionSelectorInterface) {

    const handleClick: (val: string)  => void = (val: string) =>  {
        if(selected === val) return;
        const curr = {...frame};
        for(const key of Object.keys(curr) as (keyof FrameInterface)[]){
            if(key === label.toLowerCase()) {
                curr[key] = val;
                break;
            }
        }
        setSelected?.(curr);
    }

    return (
        <div className="pl-1 mb-2.5 font-semibold flex justify-between items-center">
                <span className="font-semibold text-[13px] text-black dark:text-white">{label}</span>
                <div className=" flex items-center justify-between py-1 px-2 rounded-md bg-gray-300 text-sm w-38 dark:bg-[#232323] ">
                   {
                    values &&
                    values.map((value, index) => {
                        return (
                                 <button
                                 onClick={() => handleClick(value)}
                                 key={index}
                                  className="text-center p-1 flex-1 border-0 cursor-pointer hover:text-white hover:bg-gray-500 rounded-md text-black ml-0.5 mr-0.5 dark:text-gray-300"
                                  style={selected === value ?
                                {
                                    background: localStorage.getItem('theme') === 'dark' ? "gray" :"black", 
                                    color: "white"
                                  } :undefined}
                                  >{value}</button>
                        )
                    })
                   }
                    
                </div>
            </div>
    );
}  