
import InputCode from "@/components/InputCode";
import MainEditor from "@/components/MainEditor";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import SnippetContextProvider from "@/context/SnippetContext";
import FrameContextProvider from "@/context/FrameContext";
import CodeContextProvider from "@/context/CodeContext";
import ToastProvider from "@/context/ToastContext";


export default function Home() {
  return (
    <ToastProvider>

    <div className="flex flex-col h-screen w-screen overflow-hidden dark:bg-[#151516]">
      <NavBar />

      <div className="flex-1 flex justify-between px-15 md:px-5 xl:px-15 pt-2 pb-2 items-center 2xl:w-full ">
        <CodeContextProvider>

        <FrameContextProvider>

       <SideBar />
       <SnippetContextProvider>
       <MainEditor />

       <InputCode />

       </SnippetContextProvider>
      </FrameContextProvider>
        </CodeContextProvider>
      </div>
    </div>
    </ToastProvider>
  );
}
