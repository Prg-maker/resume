import {
  Menu,
  ArrowLeft,
  MessageSquareText,
  Monitor,
  Clock2,
  Star,
  Ellipsis,
  Search,
  Terminal,
} from "lucide-react";
import { useState } from "react";

import { createBrowserRouter, RouterProvider       } from "react-router-dom";

import { AboutMe } from "./pages/AboutMe";
import { PageProjetos } from "./pages/Projetos/page-projetos";
import { DropMenuSettings } from "./components/drop-menu/drop-menu-settings";

//const [textFontFamily , setTextFontFamily] = useState("")

const router = createBrowserRouter([
  {
    path: "/about",
    element: <AboutMe />,
  },
  {
    path: "/",
    element: <div>Index</div>,
  },
  {
    path: "/projetos",
    element: <div>Projetos</div>,
    
  },
  {
    path: "/projetos/:projetoId",
    element: <PageProjetos/>,
    
  }
  
]);

export function App() {
  const [isOpen, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  
  let [,,, url] = window.location.href.split('/')

  if(url == "" ) url = "index";

  return (
    <div className="flex w-full  h-screen ">
      <div className=" relative  ">
        {!isOpen && (
          <button className="">
            <Menu onClick={toggleOpen} className="cursor-pointer mt-2 mx-2" />
          </button>
        )}

        {isOpen && (
          <div className="z-10 inset-0  fixed md:relative w-full lg:w-[250px] md:w-[200px]  h-screen bg-[#f3f3f3] grid grid-rows-3 grid-cols-1 py-5 px-2 border-r border-[#DDDDDD]">
            <div className="flex flex-col lg:items-left items-center  gap-4 ">
              <p className="flex items-center gap-2">
                <span className="cursor-pointer">
                  <ArrowLeft onClick={toggleOpen} className="size-5" />
                </span>{" "}
                Daniel Fernandes Silva
              </p>

              <a
                href="/about"
                className="flex items-center  lg:justify-start justify-center  gap-4  w-full px-4  py-1 rounded-lg mt-5 bg-transparent hover:bg-[#D0D0D0] transition-all "
              >
                <span>
                  <Search className="size-4" />
                </span>
                Sobre mim
              </a>

              <a
                href="/projetos"
                className="flex items-center lg:justify-start justify-center gap-4  w-full px-4  py-1 rounded-lg bg-transparent hover:bg-[#D0D0D0] transition-all"
              >
                <span>
                  <Monitor className="size-4" />
                </span>
                Projetos
              </a>
            </div>

            <div className="flex  lg:items-left items-center ">
              <a href="/" className=" flex justify-center lg:justify-start items-center gap-4  w-full px-4 py-1 rounded-lg bg-transparent hover:bg-[#D0D0D0] transition-all">
                <span>
                  <Terminal className="size-5" />
                </span>
                Index
              </a>
            </div>

            <footer className="flex  items-end justify-center">
              <span className="text-sm">Feito com ReactJs e Typescript</span>
            </footer>
          </div>
        )}
      </div>

      <div className="flex flex-col w-full ">
        <div
          className={`bg-transparent px-2 py-2 transition-all flex pr-11  justify-between `}
        >
          <span className="text-sm">{url.charAt(0).toUpperCase() + url.slice(1)} \ {url}</span>
          <div className="flex  items-center justify-center gap-5">
            <span className="text-sm cursor-pointer">Share</span>

            <span className="cursor-pointer font-light">
              <MessageSquareText
                className="size-4 custom-icon"
                style={{
                  fontWeight: "normal",
                }}
              />
            </span>

            <span className="cursor-pointer font-light">
              <Clock2 className="size-4" />
            </span>

            <span className="cursor-pointer font-light">
              <Star className="size-4" />
            </span>

              <DropMenuSettings/>
          </div>
        </div>

        <div className=" bg-white w-full h-screen">
          <RouterProvider router={router}/>
        </div>
      </div>
    </div>
  );
}
