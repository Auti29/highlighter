import EditOptions from "./EditOptions";

export default function SideBar(){
    return(
        <div className="xl:w-[23%] lg:w-[25%] lg:h-full md:w-[95%] flex lg:flex-col rounded-md lg:block md:fixed lg:static z-100   dark:bg-[#151516] md:top-15">    
            <EditOptions />
        </div>
    )
}