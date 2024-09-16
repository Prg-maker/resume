import { useState } from "react"

export function ErrorPage(){

    const [statusOpen , setStatusOpen] = useState(false)
    
    function open(){
        setStatusOpen(!statusOpen)
    }
    return(
        <div className="flex-1 h-full    flex justify-center items-center">
           <div className="flex flex-col gap-2 items-center">
           <span>Página não encontrada ou não existe.</span>
            <button className="flex ">
                <a className="underline  hover:text-slate-900 transition" href="/">Retonar a página de origem</a>

            </button>

          
           </div>
        </div>
    )
}