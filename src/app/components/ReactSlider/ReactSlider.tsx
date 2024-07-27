"use client";
import { TypeOfMoviesArray } from "@/app/store";
import React from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const arrayOfTypes: TypeOfMoviesArray = ["Now Playing", "Popular", "Top Rated", "Upcoming"];
const interval = 2;

const ReactSlider = () => {
  const [index, setIndex] = React.useState(0);

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

  const myOwnSlider = () => {
    const slicedArrayOfTypes = arrayOfTypes.slice(index, index + 2);
    return slicedArrayOfTypes;
  };

  return (
    <div className="flex items-center relative">
      {index > 0 && <button className=" absolute left-0" onClick={onBack}>
        <ArrowBackIosIcon className="text-[19px]"/>
      </button>}
      <div className="flex items-center gap-4 w-full px-6">
        <AnimatePresence>
          {myOwnSlider().map((item) => (
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: .6, ease: easeInOut, delay: 0.1, } }}
              //exit={{ opacity: [0], transition: { duration: 0.2, ease: easeInOut } }}
              key={item}
              className="w-full h-[30px] flex items-center justify-center dark:bg-darkGray bg-gray-300/30 transition-all rounded-lg"
            >
              <h1 className="text-[13px] font-bold">{item}</h1>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {index !== arrayOfTypes.length - interval && <button onClick={onNext} className=" absolute right-0">
        <ArrowForwardIosIcon className="text-[19px]"/>
      </button>}
    </div>
  );
};

export default ReactSlider;
