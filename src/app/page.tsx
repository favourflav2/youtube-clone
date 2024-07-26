import Image from "next/image";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

export default function Home() {
  return (
    <main className=" dark:bg-darkHomeBg dark:text-darkText bg-lightHomeBg text-lightText min-h-screen  pt-[3.75rem]">

      {/* Content */}
      <div className="grid grid-cols-[20%_1fr] gap-4">

        {/* Left Side */}
        <div>

        </div>

        {/* Right Side */}
        <div>
          
        </div>

      </div>
      <ThemeSwitch />
      kjhkj
   
    </main>
  );
}
