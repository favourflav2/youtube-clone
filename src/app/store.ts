import { create, StateCreator } from "zustand";
import { persist, createJSONStorage, PersistOptions, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type  TypeOfMoviesArray = Array<"Now Playing" | "Popular" | "Top Rated" | "Upcoming">

type ApplicationState = {
  typeOfMovies: "Now Playing" | "Popular" | "Top Rated" | "Upcoming";
  setTypeOfMovies: (type: "Now Playing" | "Popular" | "Top Rated" | "Upcoming") => void
};

// Skip Hydration is needed becasue with nextjs we are server rendering ... when we server render we do not have access to the local storage
//* That is where we get the problem our sever and client have diffrent values ... because server is rendering diffrent data then the client


export const useApplicationStore = create<ApplicationState, [["zustand/devtools", unknown], ["zustand/immer", unknown], ["zustand/persist", unknown]]>(
  devtools(
    immer(
      persist(
        (set) => ({
          typeOfMovies:"Now Playing",
          setTypeOfMovies: (type: "Now Playing" | "Popular" | "Top Rated" | "Upcoming") => {
            set(() => ({
              typeOfMovies: type
            }))
          }
        }),
        {
          name: "applicationState",
          storage: createJSONStorage(() => localStorage),
          skipHydration: true
        }
      )
    )
  )
);
