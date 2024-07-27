"use client";
import { TypeOfMoviesArray, TypeOfMoviesList, useApplicationStore } from "@/app/store";
import React from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { twMerge } from "tailwind-merge";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const arrayOfTypes: TypeOfMoviesArray = ["Now Playing", "Popular", "Top Rated", "Upcoming"];
const interval = 2;

const ReactSlider = () => {
  // Params
  const router = useRouter();
  const searchParams = useSearchParams();
  const getStateFromQueryParams = searchParams.get("movies") || "Now Playing";
  const pathname = usePathname();

  const [index, setIndex] = React.useState(0);

  function typeOfMovies(text: string) {
    if (!text) return "Now Playing";

    return arrayOfTypes.includes(text as TypeOfMoviesList) ? text : "Now Playing";
  }

  const onBack = () => {
    setIndex((val) => {
      //if (val === 0) return arrayOfTypes.length - interval;
      if (val === 0) return index;
      return index - interval;
    });
  };

  const onNext = () => {
    setIndex((index) => {
      //if (index === arrayOfTypes.length - interval) return 0;
      if (index === arrayOfTypes.length - interval) return index;
      return index + interval;
    });
  };

  const handleClick = (item: TypeOfMoviesList) => {
    const setTypeOfMovies = new URLSearchParams(searchParams.toString());
    setTypeOfMovies.set("movies", item);
    router.push(`${pathname}?${setTypeOfMovies.toString()}`);
  };

  const myOwnSlider = () => {
    const slicedArrayOfTypes = arrayOfTypes.slice(index, index + 2);
    return slicedArrayOfTypes;
  };

  return (
    <div className="flex items-center relative">
      {index > 0 && (
        <button className=" absolute left-0" onClick={onBack}>
          <ArrowBackIosIcon className="text-[19px]" />
        </button>
      )}
      <div className="flex items-center gap-4 w-full px-6">
        {myOwnSlider().map((item) => (
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.6, ease: easeInOut, delay: 0.1 } }}
            key={item}
            className={twMerge(
              "w-full h-[30px] flex items-center cursor-pointer justify-center dark:bg-darkGray bg-gray-300/30 transition-all rounded-lg",
              typeOfMovies(getStateFromQueryParams) === item && "bg-black text-white dark:bg-gray-100 dark:text-black "
            )}
            onClick={() => handleClick(item)}
          >
            <h1 className="text-[13px] font-bold">{item}</h1>
          </motion.div>
        ))}
      </div>

      {index !== arrayOfTypes.length - interval && (
        <button onClick={onNext} className=" absolute right-0">
          <ArrowForwardIosIcon className="text-[19px]" />
        </button>
      )}
    </div>
  );
};

export default ReactSlider;
