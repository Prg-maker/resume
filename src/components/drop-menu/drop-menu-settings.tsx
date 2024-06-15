import { Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropMenuButton } from "./drop-menu-button";
import { useState } from "react";


export function DropMenuSettings() {

  const [font , _] = useState(localStorage.getItem("font"))

  let statusFont = [
      {
        title:"Inter",
        status: false,
        text:"Default"
      },
     {
        title:"Sans",
        status: false,
        text: "Sans"

      },
      {
        title:"Mono",
        status: false,
        text: "Mono"
      }
  ]
  
  const fontLocalStorage = localStorage.getItem("font")

  statusFont.map((statuFont, index ) => {
    if(statuFont.title == fontLocalStorage){
      statuFont.status = true;
    }else{
      statuFont.status = false;

    }
  })
  
 


  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="cursor-pointer font-light">
          <Ellipsis className="size-4 " />
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white  drop-shadow w-[270px] h-[300px] rounded-lg mr-4 p-4 flex flex-col gap-4">
        <span className="text-xs font-normal text-[#929292]">Style</span>
        <div className="flex gap-2 items-center justify-center">
          
          {
            statusFont.map(statuFont => {
              return(
                <DropMenuButton isActive={statuFont.status} typografy={statuFont.title} >{statuFont.text}</DropMenuButton>
              )
            })
          }
         
        
        </div>

        <div className="w-full border-t mt border-[#d4d4d4] bg-red-100 " />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
