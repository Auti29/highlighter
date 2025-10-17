import EditOptions from "./EditOptions";

export default function SideBar(){
    return(
        <div className="md:w-[30%] xl:w-[23%] lg:w-[25%] h-full flex flex-col rounded-md md:hidden lg:block">    
            <EditOptions />
        </div>
    )
}