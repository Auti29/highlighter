"use client"
import { FrameInterface } from "@/types/type";
import HeadingSecondary from "./HeadingSecondary";
import OptionSelector from "./OptionSelector";
import { useFrame } from "@/hooks/useFrame";

export default function FrameOptions() {
    const {frame, setFrame} = useFrame();

    return (
        <div className="w-full lg:pl-2 pr-0.5 lg:pr-1 flex flex-col">
            <HeadingSecondary text={"Frame"}/>
            <div className="ml-3 md:ml-2 flex lg:flex-col mt-2 lg:ml-3">
                <OptionSelector<FrameInterface> label="Padding" values={["0", "10", "20", "30"]} selected = {frame?.padding}
                setSelected={setFrame}
                state={frame}
                />
                <OptionSelector<FrameInterface> label="Radius" values={["N/A", "S", "M", "L"]} selected= {frame?.radius} setSelected={setFrame} state={frame}/>
                <OptionSelector<FrameInterface> label="Visible" values={["Yes", "No"]} selected = {frame?.visible} setSelected={setFrame} state={frame}/>
                <div className="lg:pl-0.5 xl:pl-1 mb-2.5 flex justify-between lg:items-center md:flex-col lg:flex-row">
                    <span className="text-[13px] font-semibold text-black dark:text-white">Background</span>
                    <div className="flex items-center justify-between py-1 px-2 rounded-md bg-gray-300 text-sm md:w-27 lg:w-32  xl:w-38 dark:bg-[#232323] md:mx-1.5 lg:mx-0">
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