import { Dispatch, RefObject, SetStateAction } from "react";
import { createPortal } from "react-dom";

export default function OptSelector({parentRef, values, selected, setDropdown, setDownloadType}: {parentRef: RefObject<HTMLDivElement | null>, values: string[], selected: string, setDropdown: Dispatch<SetStateAction<boolean>>, setDownloadType: Dispatch<SetStateAction<string>>}) {
    if(!parentRef.current?.parentNode) return null;

    const handleClick = (val: string) => {
        setDownloadType(val);
        setDropdown(false);
        return;
    }


    return createPortal (
        <div className="bg-gray-300 text-sm dark:bg-[#282828] dark:text-white overflow-auto rounded-md z-50 absolute bottom-11 
        right-7 flex px-1 flex-col justify-center items-center pb-1">
            <h2 className="border-b border-gray-500 text-sm font-semibold py-1">Download Options</h2>
            <div className="flex justify-center items-center w-full mt-1">
            {
                values &&
                values.map((val, i) => {
                    return (
                        <span 
                        onClick={() => handleClick(val)}
                        key={i} className={`rounded-md my-1 mx-0.5 px-2 py-0.5 hover:bg-[#404040] hover:text-white cursor-pointer 
                        ${selected.toLowerCase() === val.toLowerCase() && "bg-[#404040]"}
                            `}>{val}</span>
                    )
                })
            }
            </div>
            
        </div>, 
        parentRef.current.parentNode as Element
    )
}