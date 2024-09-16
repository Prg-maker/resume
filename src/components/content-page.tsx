import {
    Menu,
    ArrowLeft,
    MessageSquareText,
    Clock2,
    Star,
    Search,
    Terminal,
    Monitor,
  } from "lucide-react";

  import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AboutMe } from "../routes/about";
import { PageProjetos } from "../routes/project";
import { DropMenuSettings } from "../components/ui/drop-menu-modal-settings";
import { Projeto } from "../routes/projects-page";
import { ErrorPage } from "../routes/error-page-not-found";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { UrlUi } from "../components/ui/url-ui";


const router = createBrowserRouter([
    {
      path: "/about",
      element: <AboutMe />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <div>Index</div>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/projetos",
      element: <Projeto />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/projetos/:projetoId",
      element: <PageProjetos />,
      errorElement: <ErrorPage />,
    },
  ]);

  
export function ContentPage(){


  let [, , , url] = window.location.href.split("/");

  if (!url ) url = "index";
    return(
        <div className="flex flex-col w-full ">
        <div
          className="bg-transparent px-2 py-2 transition-all flex pr-11  justify-between"
        >
          <div className="flex items-center gap-4">
              <DialogTrigger>
              <button type="button" >
                <Menu className="cursor-pointer " />
              </button>
              </DialogTrigger>
            <span className="text-sm">
              {url.charAt(0).toUpperCase() + url.slice(1)} \ {url}
            </span>
          </div>

          <div className="flex  items-center justify-center gap-5">
            <span className="text-sm cursor-pointer">Share</span>

            <span className="cursor-pointer font-light">
              <MessageSquareText
              
                className="size-4"
              />
            </span>

            <span className="cursor-pointer ">
              <Clock2 className="size-4" />
            </span>

            <span className="cursor-pointer ">
              <Star className="size-4" />
            </span>

            <DropMenuSettings />
          </div>
        </div>

        <div className=" bg-white w-full h-screen">
          <RouterProvider router={router} />
        </div>
      </div>
    )
}