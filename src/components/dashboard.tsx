import { ArrowLeft, Monitor, Search, Terminal } from "lucide-react";
import { UrlUi } from "./ui/url-ui";
import { DialogClose, DialogContent, DialogTitle } from "./ui/dialog";



export function DashBoard(){


    return(
      <DialogContent asChild={true} >
      <div className="h-fulll flex flex-col gap-6 ">

        <div className="flex items-left gap-4 ml-3">
          <DialogClose>
            <ArrowLeft className="size-5 cursor-pointer" />
          </DialogClose>
            <DialogTitle>
              Daniel Fernandes
            </DialogTitle>
        </div>

          <div className="flex flex-col gap-5">
            
            <UrlUi text="Sobre mim" href="/about">
              <Search className="size-4" />
            </UrlUi>

            <UrlUi text="Projetos" href="/projetos">
            <Monitor className="size-4" />
          </UrlUi>

            <div className="mt-5">
              <UrlUi text="Index" href="/">
              <Terminal className="size-4" />
            </UrlUi>
            </div>

          </div>
          <div className="flex flex-1  items-end ">
          <span className="text-sm">Feito com ReactJs e Typescript</span>
        </div>
      </div>
    </DialogContent>
    )
}