"use client";

import { useCodeContext } from "@/hooks/useCode";
import HeadingSecondary from "./HeadingSecondary";
import OptionSelector from "./OptionSelector";
import { languages } from "@/data/languages";
import SelectOptions from "./SelectOptions";
import { CodeInterface } from "@/context/CodeContext";
import { themes } from "@/data/themes";

export default function CodeOptions(){
    const {codeStyles, setCodeStyles} = useCodeContext();

    return (
         <div className="w-full  pl-2 pr-1 flex flex-col">
                <div className="flex mt-2">
                <HeadingSecondary text={"Editor"}/>

                </div>
                <div className="ml-3  flex flex-col mt-2 ">
                    <SelectOptions label={"Language"} values={languages} selected={codeStyles.language} setCodeStyles={setCodeStyles} state={codeStyles}/>
                    <SelectOptions label={"Themes"} values={themes} selected={codeStyles.themes} setCodeStyles={setCodeStyles} state={codeStyles}/>
                    <OptionSelector<CodeInterface> label="LineNumbers" values={["show", "hide"]} selected={codeStyles.linenumbers} setSelected={setCodeStyles} state={codeStyles}/>
                    <OptionSelector<CodeInterface> label="Header" values={["show", "hide"]} selected={codeStyles.header} setSelected={setCodeStyles} state={codeStyles}/>
                    <OptionSelector<CodeInterface> label="Shadow" values={["show", "hide"]} selected={codeStyles.shadow} setSelected={setCodeStyles} state={codeStyles}/>
                    
                </div>
        </div>
    )
}