import Image from "next/image";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

export default function Home() {
  return (
    <main className=" dark:bg-darkHomeBg dark:text-darkText bg-lightHomeBg text-lightText min-h-screen  pt-[3.75rem]">

      {/* Content */}
      <div className="grid lg:grid-cols-[10%_1fr] grid-cols-1 gap-2">

        {/* Left Side */}
        <div className="bg-red-500 w-full h-[500px] lg:block hidden">
left
        </div>

        {/* Right Side */}
        <div className="w-full bg-purple-500 h-[500px]">
          right
        </div>

      </div>
      <ThemeSwitch />
      kjhkj
   
    </main>
  );
}
