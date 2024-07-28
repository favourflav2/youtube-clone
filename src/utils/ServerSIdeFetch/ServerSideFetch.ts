"use server";
import { TypeOfMoviesList } from "@/app/store";
import { formatStringForMovieUrl } from "../formatStringForMovieUrl/formatStringForMovieUrl";

const ServerSideFetch = async (typeOfMovies: TypeOfMoviesList, page: number) => {
  const formattedTypeOfMovies = formatStringForMovieUrl(typeOfMovies);
  const res = await fetch(`https://api.themoviedb.org/3/movie/${formattedTypeOfMovies}?language=en-US&page=${page}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
  const data = await res.json();

  return data;
};

export default ServerSideFetch;
