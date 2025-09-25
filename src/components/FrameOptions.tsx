"use client"
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
                frame={frame}
                />
                <OptionSelector label="Radius" values={["0", "10", "20", "30"]} selected= {frame?.radius} setSelected={setFrame} frame={frame}/>
                <OptionSelector label="Visible" values={["Yes", "No"]} selected = {frame?.visible} setSelected={setFrame} frame={frame}/>
                <div className="pl-1 mb-2 flex justify-between items-center">
                    <span className="text-[13px] font-bold text-gray-700">Background</span>
                    <div className="flex items-center justify-between py-1 px-2 rounded-md bg-gray-300 text-sm w-38">
                        <input type="color" className="flex-1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}