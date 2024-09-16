import { Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropMenuButton } from "./drop-menu-item-button";


export function DropMenuSettings() {

 


  return (
    <DropdownMenu >
      <DropdownMenuTrigger>
        <span className="cursor-pointer font-light">
          <Ellipsis className="size-4 " />
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white  drop-shadow w-[270px] h-[300px] rounded-lg mr-4 p-4 flex flex-col gap-4 z-10 relative top-2">
        <span className="text-xs font-normal text-[#929292]">Style</span>
        <div className="flex gap-2 items-center justify-center">
        
        
        </div>

        <div className="w-full border-t mt border-[#d4d4d4] bg-red-100 " />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
