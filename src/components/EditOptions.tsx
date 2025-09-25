import CodeOptions from "./CodeOptions";
import FrameOptions from "./FrameOptions";

export default function EditOptions(){
    return(
        <div className="w-full h-full border border-gray-400 rounded-md p-2">
            <div className="border-b-2 border-gray-300 pb-2">
            <FrameOptions />
            </div>
            <div className="border-b-2 border-gray-300 pb-2">
            <CodeOptions />
            </div>
        </div>
    )
}