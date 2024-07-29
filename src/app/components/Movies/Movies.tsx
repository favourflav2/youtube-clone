"use client";
import { useGetMovies } from "@/app/hooks/useGetMovies";
import React from "react";
import YoutubeCard from "../Cards/YoutubeCard";
import LoadingCard from "../Cards/LoadingCard";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ParamsSchema } from "@/app/schemas/TypeOfMoviesSchema";
import { Pagination } from "@mui/material";
import { useTheme } from "next-themes";

const Movies = () => {
  const searchParams = useSearchParams();
  const getMoviesStateFromQueryParams = searchParams.get("movies") || "Now Playing";
  const getPageStateFromQueryParams = searchParams.get("page") || "1";
  const pathname = usePathname();
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  function typeOfMovies(text: string | undefined) {
    if (!text) return "Now Playing";

    const zodValidatingUrl = ParamsSchema.safeParse({ movies: text });

    if (!zodValidatingUrl.success) {
      alert("The url path is ?movies=<Type Of Movies>");
      return "Now Playing";
    }

    return zodValidatingUrl.data.movies;
  }

  const { data, error, isLoading } = useGetMovies({
    typeOfMovies: `${typeOfMovies(getMoviesStateFromQueryParams)}`,
    page: `${getPageStateFromQueryParams}`,
  });

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const setPageNum = new URLSearchParams(searchParams.toString());
    setPageNum.set("page", value.toString());
    //console.log(`${pathname}?${setPageNum}`)
    router.push(`${pathname}?${setPageNum}`);
  };

  if (error) {
    return <div className="flex items-center justify-center h-full ">There was an error getting the data</div>;
  }

  return (
    <div className="flex flex-col">
      {/* Mapped Data */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 superSmall:grid-cols-2  grid-cols-1 gap-x-4 gap-y-8 p-6">
        {isLoading ? <LoadingCard /> : data?.results.map((item) => <YoutubeCard item={item} key={item.id} />)}
      </div>
      {/* Pagination */}
      {data?.total_pages && data.page && data.total_results && (
        <>
          {/* Desktop Pagination */}
          <div className="sm:flex hidden items-center justify-center mb-2 mt-6">
            <Pagination
              onChange={handlePageChange}
              count={data.total_pages}
              page={parseFloat(getPageStateFromQueryParams)}
              variant="outlined"
              size="large"
              sx={{
                "& .MuiPaginationItem-root": {
                  borderColor: `${resolvedTheme === "light" ? "#d1d5db" : "gray"}`,
                  color: `${resolvedTheme === "light" ? "black" : "white"}`,
                  "&.Mui-selected": {
                    background: `${resolvedTheme === "light" ? "#d1d5db" : "white"}`,
                    color: `${resolvedTheme === "light" ? "black" : "black"}`,
                  },
                },
              }}
            />
          </div>
          {/* Mobile Pagination */}
          <div className="flex sm:hidden items-center justify-center mb-2 mt-6">
            <Pagination
              onChange={handlePageChange}
              count={data.total_pages}
              page={parseFloat(getPageStateFromQueryParams)}
              variant="outlined"
              sx={{
                "& .MuiPaginationItem-root": {
                  borderColor: `${resolvedTheme === "light" ? "#d1d5db" : "gray"}`,
                  color: `${resolvedTheme === "light" ? "black" : "white"}`,
                  "&.Mui-selected": {
                    background: `${resolvedTheme === "light" ? "#d1d5db" : "white"}`,
                    color: `${resolvedTheme === "light" ? "black" : "black"}`,
                  },
                },
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Movies;
