import { Ellipsis } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
export function DropMenuSettings() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <span className="cursor-pointer font-light">
                    <Ellipsis className="size-4 " />
                </span>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white  drop-shadow w-[270px] h-[300px] rounded-lg mr-4 p-4 flex flex-col gap-4">

                <div className="flex gap-2 items-center justify-center">
                   <DropdownMenuItem className="w-[200px] h-[70px] text-lg font-Inter bg-white  drop-shadow-sm   rounded-lg flex flex-col hover:bg-[#EAEAEA] transition-all border-none">
                    <button className="flex flex-col ">
                        <span>Ag</span>

                        <span className="text-xs text-[#929292] font-Inter">
                            Default
                        </span>
                    </button>
                   </DropdownMenuItem>

                   <DropdownMenuItem className="w-[200px] h-[70px] text-lg font-Inter bg-white  drop-shadow-sm   rounded-lg flex flex-col hover:bg-[#EAEAEA] transition-all">
                    <button className="flex flex-col">
                        <span>Ag</span>

                        <span className="text-xs text-[#929292] font-Sans">
                            Sans
                        </span>
                    </button>
                   </DropdownMenuItem>

                   <DropdownMenuItem className="w-[200px] h-[70px] text-lg font-Inter bg-white  drop-shadow-sm   rounded-lg flex flex-col hover:bg-[#EAEAEA] transition-all">
                    <button className="flex flex-col">
                        <span>Ag</span>

                        <span className="text-xs text-[#929292] font-Mono">
                            Mono
                        </span>
                    </button>
                   </DropdownMenuItem>
                       

                       
                </div>

                <div className="w-full border-t mt border-[#d4d4d4] bg-red-100 "/>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}