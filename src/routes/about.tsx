import { useEffect, useState } from "react"

export function AboutMe(){
    const [font , setFont] = useState(window.localStorage.getItem("font")?? "Inter")


    return(
        <div className="font-Sans ">
          
            <p className={`font-${font}`}>aq</p>
        </div>
    )
}