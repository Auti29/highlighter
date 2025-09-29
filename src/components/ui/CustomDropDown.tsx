import DropDownItem from "./DropDownItem";

interface DropDownI {
    values: string[], 
    selected: string, 
    label: string, 
    setDropDown: (arg: boolean) => void
}

export default function CustomDropDown({values, selected, label, setDropDown}: DropDownI) {
    return(
        <div className="flex flex-col items-center absolute right-0 left-0 top-8 m-auto w-42 h-40 bg-gray-300 text-sm dark:bg-[#282828] dark:text-white overflow-auto rounded-md z-50 ">

        {
            values.map((val, i) => {
                return (
                
                    <DropDownItem 
                    val={val} key={i}
                    selected={selected}
                    label={label}
                    setDropDown={setDropDown}
                    />
               
                );
            })
        }                        
                    
        </div>
    )
}