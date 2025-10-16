import Logo from "./Logo";
import NavIcons from "./NavIcons";

export default function NavBar(){
    return(
        <div className="w-full flex justify-between items-center lg:px-15 md:px-5 pt-2 pb-2 mt-2 mb-4 "> 
            <Logo />
            <NavIcons />
        </div>
    )
}