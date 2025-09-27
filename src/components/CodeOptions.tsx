"use client";

import { useCodeContext } from "@/hooks/useCode";
import HeadingSecondary from "./HeadingSecondary";
import OptionSelector from "./OptionSelector";
import { languages } from "@/data/languages";
import SelectOptions from "./SelectOptions";

export default function CodeOptions(){
    const {codeStyles, setCodeStyles} = useCodeContext();

    return (
         <div className="w-full  pl-2 pr-1 flex flex-col">
                <div className="flex mt-2">
                <HeadingSecondary text={"Code"}/>

                </div>
                <div className="ml-3  flex flex-col mt-2 ">
                    <SelectOptions label={"Language"} values={languages} selected={codeStyles.language} setCodeStyles={setCodeStyles} state={codeStyles}/>

                </div>
        </div>
    )
}