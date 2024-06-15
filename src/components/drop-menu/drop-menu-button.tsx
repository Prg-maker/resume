import { Children, ComponentProps, ReactNode } from "react";
import {DropdownMenuItem} from '@radix-ui/react-dropdown-menu'
interface DropMenuButtonProps extends ComponentProps<'button'> {
    typografy: "Sans"  | "Mono"  | "Inter" | string ,
    children: ReactNode,
    isActive: boolean,
}

export function DropMenuButton({typografy , isActive, children , ...props}: DropMenuButtonProps){

    function handleToggleTypografy(){
        localStorage.setItem("font", typografy)
        location.reload()
    }


    
    
    return(
        <DropdownMenuItem className={`w-[200px] h-[70px] text-lg font-Inter ${isActive ? "bg-[#EAEAEA]" : "bg-white"}  drop-shadow-sm   rounded-lg flex flex-col hover:bg-[#EAEAEA] transition-all border-none outline-none `}>
        <button className="flex flex-col gap-1 " {...props} onClick={handleToggleTypografy}>
            <span className={`font-${typografy} pt-2`}>Ag</span>

            <span className={`text-xs text-[#929292] font-${typografy}`}>
                {children}
            </span>
        </button>
        </DropdownMenuItem>
    )
}