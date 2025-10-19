"use client";

import useEditSidebar from "@/hooks/useEditSidebar";
import EditOptions from "./EditOptions";

export default function SideBar(){
    const { isVisible } = useEditSidebar();
    return(
        <div className={`xl:w-[23%] lg:w-[25%] lg:h-full md:w-[95%] flex lg:flex-col rounded-md ${isVisible ? "md:block": "md:hidden"} lg:block md:fixed lg:static z-100   dark:bg-[#151516] md:top-15 bg-white md:shadow-xl lg:shadow-none`}>    
            <EditOptions />
        </div>
    )
}