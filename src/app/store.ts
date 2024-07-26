import { create, StateCreator } from "zustand";
import { persist, createJSONStorage, PersistOptions, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type ApplicationState = {
  openProfilePicMenu: boolean;
  setOpenProfilePicMenu: () => void;
};

type MyPersist = (config: StateCreator<ApplicationState>, options: PersistOptions<ApplicationState>) => StateCreator<ApplicationState>;

export const useApplicationStore = create<ApplicationState, [["zustand/devtools", unknown], ["zustand/immer", unknown]]>(
  devtools(
    immer(
      (persist as MyPersist)(
        (set) => ({
          openProfilePicMenu: false,
          setOpenProfilePicMenu: () => {
            set((state) => ({
              openProfilePicMenu: !state.openProfilePicMenu,
            }));
          },
        }),
        {
          name: "applicationState",
          storage: createJSONStorage(() => localStorage),
        }
      )
    )
  )
);
