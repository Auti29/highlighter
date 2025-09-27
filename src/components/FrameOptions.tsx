"use client"
import { FrameInterface } from "@/types/type";
import HeadingSecondary from "./HeadingSecondary";
import OptionSelector from "./OptionSelector";
import { useFrame } from "@/hooks/useFrame";

export default function FrameOptions() {
    const {frame, setFrame} = useFrame();

    return (
        <div className="w-full  pl-2 pr-1 flex flex-col">
            <HeadingSecondary text={"Frame"}/>
            <div className="ml-3  flex flex-col mt-2 ">
                <OptionSelector label="Padding" values={["0", "10", "20", "30"]} selected = {frame?.padding}
                setSelected={setFrame}
                state={frame}
                />
                <OptionSelector label="Radius" values={["N/A", "S", "M", "L"]} selected= {frame?.radius} setSelected={setFrame} state={frame}/>
                <OptionSelector label="Visible" values={["Yes", "No"]} selected = {frame?.visible} setSelected={setFrame} state={frame}/>
                <div className="pl-1 mb-2 flex justify-between items-center">
                    <span className="text-[13px] font-semibold text-black dark:text-white">Background</span>
                    <div className="flex items-center justify-between py-1 px-2 rounded-md bg-gray-300 text-sm w-38 dark:bg-[#232323] ">
                        <input type="color" 
                        value={frame?.background}
                        onChange={(e) => {
                            if(e.target.value !== frame?.background){
                                const temp: FrameInterface = {...frame};
                                temp["background"] = e.target.value;
                                setFrame(temp);
                                
                            }
                        }}
                        className="flex-1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}