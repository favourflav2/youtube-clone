import { useQuery } from "@tanstack/react-query";
import { TypeOfMoviesList } from "../store";
import { movieDataSchema } from "../schemas/MovieDataSchema";
import ServerSideFetch from "@/utils/ServerSIdeFetch/ServerSideFetch";

type Props = {
  typeOfMovies: TypeOfMoviesList;
  page: string;
};

export const useGetMovies = ({ typeOfMovies, page }: Props) => {
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["getMovies", page, typeOfMovies],
    queryFn: async () => {
      const numPage: number = typeof page === "string" ? parseFloat(page) : page;
      const data = await ServerSideFetch(typeOfMovies,numPage)

      // client side validation
      const zodValidatingData = movieDataSchema.safeParse(data);

      if (!zodValidatingData.success) {
        const errorMessageArray = zodValidatingData.error.issues;
        console.error(errorMessageArray);
        throw new Error("Oh no! ... the data the came from api does not match schema");
      }

      const validatedData = zodValidatingData.data;

      return validatedData;
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return {
    data,
    isLoading,
    error,
    isFetching
  };
};
