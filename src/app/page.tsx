import Image from "next/image";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import ReactSlider from "./components/ReactSlider/ReactSlider";
import { TypeOfMoviesList } from "./store";
import Movies from "./components/Movies/Movies";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";

export default function Home({ searchParams }: { searchParams: { id: TypeOfMoviesList | undefined } }) {
  console.log(searchParams.id);
  return (
    <main className=" dark:bg-darkHomeBg dark:text-darkText bg-lightHomeBg text-lightText min-h-screen  pt-[3.75rem]">
      {/* Content */}
      <div className="grid lg:grid-cols-[6%_1fr] grid-cols-1 gap-1 pt-4">
        {/* Left Side */}
        <div className="lg:flex flex-col p-3 hidden gap-6">
          {/* Home */}
          <div className="flex flex-col items-center justify-center gap-1">
            <button>
              <HomeIcon />
            </button>
            <h3 className="text-[11px]">Home</h3>
          </div>

           {/* Shorts */}
           <div className="flex flex-col items-center justify-center gap-1">
            <button>
              <VideocamIcon />
            </button>
            <h3 className="text-[11px]">Shorts</h3>
          </div>

           {/* Subscriptions */}
           <div className="flex flex-col items-center justify-center gap-1">
            <button>
              <SubscriptionsIcon />
            </button>
            <h3 className="text-[11px]">Subscriptions</h3>
          </div>

           {/* You */}
           <div className="flex flex-col items-center justify-center gap-1">
            <button>
              <VideoSettingsIcon />
            </button>
            <h3 className="text-[11px]">You</h3>
          </div>
        </div>

        {/* Right Side */}
        <div className="">
          {/* Content */}
          <div className=" flex flex-col">
            <ReactSlider />

            <Movies />
          </div>
        </div>
      </div>
      <ThemeSwitch />
    
    </main>
  );
}
