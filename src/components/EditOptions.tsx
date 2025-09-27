import CodeOptions from "./CodeOptions";
import FrameOptions from "./FrameOptions";

export default function EditOptions(){
    return(
        <div className="w-full h-full border border-gray-300 rounded-md p-2 dark:border-[#2e2f2ff0] ">
            <div className="border-b-2 border-gray-300 dark:border-[#2e2f2ff0]  pb-2">
            <FrameOptions />
            </div>
            <div className="border-b-2 border-gray-300 pb-2">
            <CodeOptions />
            </div>
        </div>
    )
}