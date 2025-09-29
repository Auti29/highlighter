"use client";
import { CodeInterface } from "@/context/CodeContext";
import { useTheme } from "@/hooks/useTheme";
import { FrameInterface } from "@/types/type";

type Setter<T> = (val: T) => void;


interface OptionSelectorInterface<T extends object> {
    label: string, 
    values: string[],  
    selected?: string | null, 
    setSelected?: Setter<T>, 
    state?: T,
    
}

export default function OptionSelector<T extends object>({label, values, selected, setSelected, state}: OptionSelectorInterface<T>) {
    const { theme } = useTheme();

    const handleClick = (val: string): void => {
    
    if (selected === val) return;

    const curr = { ...state } as T;
    
    const key = label.toLowerCase() as keyof typeof curr;
    if (key in curr) {
        curr[key] = val as never; 
        setSelected?.(curr);
    }
};


    return (
        <div className="pl-1 mb-2.5 font-semibold flex justify-between items-center">
                <span className="font-semibold text-[13px] text-black dark:text-white">{label}</span>
                <div className=" flex items-center justify-between py-1 px-2 rounded-md bg-gray-300 text-sm w-38 dark:bg-[#232323] ">
                   {
                    values &&
                    values.map((value: string, index: number) => {
                        return (
                                 <button
                                 onClick={() => handleClick(value)}
                                 key={index}
                                  className="text-center p-1 flex-1 border-0 cursor-pointer hover:text-white hover:bg-gray-500 rounded-md text-black ml-0.5 mr-0.5 dark:text-gray-300 "
                                  style={selected === value ?
                                {
                                    background: theme === "dark"
                                        ? "#404040"
                                        : "black",

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