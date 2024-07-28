import { movieDataSchemaType, MovieObjectType } from "@/app/schemas/MovieDataSchema";
import Image from "next/image";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type Props = {
  item: MovieObjectType;
};

const YoutubeCard = ({ item }: Props) => {
  const formattedViewsAndDays = () => {
    const views = Intl.NumberFormat().format(Math.floor(Math.random() * 200000));
    const days = Math.floor(Math.random() * 20);

    return {
      views: parseFloat(views),
      days,
    };
  };
  return (
    <div className="flex flex-col  gap-2 pb-1">
      <div className="xl:h-[18.75rem] lg:h-[15.625rem] 2xl:h-[21.875rem] min-[440px]:h-[17.813rem] h-[300px]  rounded-lg">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.id.toString()}
          width={500}
          height={500}
          className="w-full h-full object-fill rounded-lg"
        />
      </div>

      {/* Logo and Title and dots */}
      <div className="justify-between flex w-full items-center gap-1">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <div className="h-[35px] w-[35px] relative rounded-full">
            <Image src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} fill className=" object-fill rounded-full" alt="logo" />
          </div>
          <h1 className="text-[14px] flex flex-wrap">{item.title}</h1>
        </div>

        {/* Dots */}
        <button>
          <MoreVertIcon className="text-[20px]" />
        </button>
      </div>

      {/* Channel Name and SUbs */}
      <div className="flex w-full items-center gap-1 mt-1">
        <div className="flex items-center gap-2">
          {/* Empty Div */}
          <div className="h-[35px] w-[35px]"></div>
          <div className="flex flex-col">
            <h1 className="text-[14px] flex flex-wrap">{item.overview.slice(0, 25) + "..."}</h1>
            <h1 className="text-[13px] flex flex-wrap">
              <span>{formattedViewsAndDays().views}</span>K views <span className="mx-1">•</span>{" "}
              <span className="mr-[2px]">{formattedViewsAndDays().days}</span> days ago
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;

// <div className=" relative h-60 w-full rounded-lg mb-2">
// <Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.id.toString()} fill className=" object-fill rounded-lg" />
// </div>
