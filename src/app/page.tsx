import Image from "next/image";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import ReactSlider from "./components/ReactSlider/ReactSlider";
import { TypeOfMoviesList } from "./store";

export default function Home({searchParams}:{searchParams: {id:TypeOfMoviesList | undefined}}) {

  console.log(searchParams.id)
  return (
    <main className=" dark:bg-darkHomeBg dark:text-darkText bg-lightHomeBg text-lightText min-h-screen  pt-[3.75rem]">
      {/* Content */}
      <div className="grid lg:grid-cols-[10%_1fr] grid-cols-1 gap-2 pt-4">
        {/* Left Side */}
        <div className="bg-red-500  h-[500px] lg:block hidden">left</div>

        {/* Right Side */}
        <div className="  h-[500px]">
          {/* Content */}
          <div className=" flex flex-col">
            <ReactSlider />
             
            
          </div>
        </div>
      </div>
      <ThemeSwitch />
      kjhkj
    </main>
  );
}
