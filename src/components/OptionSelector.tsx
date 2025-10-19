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
        <div className="xl:pl-1 lg:pl-0.5 mb-2.5 font-semibold flex justify-between lg:items-center md:flex-col lg:flex-row">
                <span className="font-semibold text-[13px] text-black dark:text-white">{label}</span>
                <div className=" flex items-center justify-center py-1 px-2 rounded-md bg-gray-300 text-sm  md:w-27 lg:w-32 xl:w-38 dark:bg-[#232323] md:mx-1.5 lg:mx-0">
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