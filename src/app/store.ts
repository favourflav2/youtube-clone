import { create, StateCreator } from "zustand";
import { persist, createJSONStorage, PersistOptions, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { mergeDeepLeft } from "ramda";

type ApplicationState = {
  openProfilePicMenu: boolean;
  setOpenProfilePicMenu: (action:boolean) => void;
};






export const useApplicationStore = create<ApplicationState, [["zustand/devtools", unknown], ["zustand/immer", unknown],["zustand/persist", unknown]]>(
  devtools(
    immer(
      persist(
        (set) => ({
          openProfilePicMenu: false,
          setOpenProfilePicMenu: (action:boolean) => {
            //console.log(action,"action")
            set((state) => {
              state.openProfilePicMenu = action
            })
          },
        }),
        {
          name: "applicationState",
          storage: createJSONStorage(() => localStorage),
          merge: (persistedState:unknown, currentState) =>
            mergeDeepLeft(persistedState as any, currentState)
        }
      )
    )
  )
);
