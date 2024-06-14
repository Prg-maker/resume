import { useState } from "react"

export function PageProjetos(){


    const [font, setFont] = useState("Inter")

    function handleToggleFontSans(){
        setFont("Sans")
    }

    function handleToggleFontMono(){
        setFont("mono")
    }

    function handleToggleFontDefault(){
        setFont("Inter")
    }
    return(
        <div className="flex flex-col gap-2">
            <p className={`font-${font}`}>teste</p>
        </div>
    )
}