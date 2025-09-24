import EditOptions from "./EditOptions";
import Heading from "./Heading";

export default function SideBar(){
    return(
        <div className="w-[23%] h-full flex flex-col "> 
            <Heading text={"Editor"}/>
            <EditOptions />
        </div>
    )
}