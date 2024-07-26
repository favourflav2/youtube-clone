import { create, StateCreator } from "zustand";
import { persist, createJSONStorage, PersistOptions, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type ApplicationState = {
  openProfilePicMenu: boolean;
  setOpenProfilePicMenu: (action:boolean) => void;
};

type MyPersist = (config: StateCreator<ApplicationState>, options: PersistOptions<ApplicationState>) => StateCreator<ApplicationState>;

export const useApplicationStore = create<ApplicationState, [["zustand/devtools", unknown], ["zustand/immer", unknown]]>(
  devtools(
    immer(
      (persist as MyPersist)(
        (set) => ({
          openProfilePicMenu: false,
          setOpenProfilePicMenu: (action:boolean) => {
            set(() => ({
              openProfilePicMenu: action,
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
