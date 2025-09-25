import Logo from "./Logo";
import NavIcons from "./NavIcons";

export default function NavBar(){
    return(
        <div className="w-full flex justify-between items-center pl-15 pr-15 pt-2 pb-2 mt-2 mb-4 "> 
            <Logo />
            <NavIcons />
        </div>
    )
}