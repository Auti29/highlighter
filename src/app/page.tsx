import InputCode from "@/components/InputCode";
import MainEditor from "@/components/MainEditor";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";


export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <NavBar />

      <div className="flex-1 flex justify-between pl-10 pr-10 pt-2 pb-2 items-center ">
       <SideBar />
       <MainEditor />

       <InputCode />
      </div>
    </div>
  );
}
