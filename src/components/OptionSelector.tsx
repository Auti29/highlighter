"use client"
interface OptionSelectorInterface {
    label: string;
    values: string[];
}

export default function OptionSelector({label, values}: OptionSelectorInterface) {

    return (
        <div className="pl-1 mb-2 font-bold flex justify-between items-center">
                <span className="font-bold text-[13px] text-gray-700">{label}</span>
                <div className=" flex items-center justify-between py-1 px-2 rounded-md bg-gray-300 text-sm w-38">
                   {
                    values &&
                    values.map((value, index) => {
                        return (
                                 <button
                                 key={index}
                                  className="text-center p-1 flex-1 border-0 cursor-pointer hover:text-white hover:bg-gray-500 rounded-md text-gray-700">{value}</button>
                        )
                    })
                   }
                    
                </div>
            </div>
    );
}