import InputCode from "@/components/InputCode";
import MainEditor from "@/components/MainEditor";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import SnippetContextProvider from "@/context/SnippetContext";
import FrameContextProvider from "@/context/FrameContext";


export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <NavBar />

      <div className="flex-1 flex justify-between pl-15 pr-15 pt-2 pb-2 items-center ">
        <FrameContextProvider>

       <SideBar />
       <SnippetContextProvider>
       <MainEditor />

       <InputCode />

       </SnippetContextProvider>
      </FrameContextProvider>
      </div>
    </div>
  );
}
