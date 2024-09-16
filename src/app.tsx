


import { ContentPage } from "./components/content-page";
import { DashBoard } from "./components/dashboard";
import { Dialog } from "./components/ui/dialog";


export function App() {



  return (

    <Dialog >

      <div className="flex w-full  h-screen ">



        <DashBoard/>
        <ContentPage/>


      </div>
    </Dialog>

  );
}
