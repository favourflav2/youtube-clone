import { create, StateCreator } from "zustand";
import { createStore } from 'zustand/vanilla'
import { persist, createJSONStorage, PersistOptions, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";



type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const sideEffectFunction = () => {

}

type MyPersist = (config: StateCreator<CounterStore>, options: PersistOptions<CounterStore>) => StateCreator<CounterStore>;

// zustand/perstist, it requires unknown in place of never

export const useCounterStore = create<CounterStore, [["zustand/devtools", unknown], ["zustand/immer", unknown]]>(
  devtools(
    immer(
      (persist as MyPersist)(
        (set) => ({
          count: 0,
          increment: () => {
            set((state) => ({
                count: state.count + 1,
              }))
          },
          decrement: () => {
            set((state) => ({
              count: state.count - 1,
            }))
            
          },
        }),
        {
          name: "counter", // name of the item in the storage (must be unique)
          storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
          onRehydrateStorage: (state) => {
            console.log('hydration starts')
    
            // optional
            return (state, error) => {
              if (error) {
                console.log('an error happened during hydration', error)
              } else {
                console.log('hydration finished')
              }
            }
          },
        }
      )
    )
  )
);

