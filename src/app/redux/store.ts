import { combineReducers } from "redux";
import applicationSlice from "./features/appSlice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import storage from "./storage";
import persistReducer from "redux-persist/es/persistReducer";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FLUSH , REGISTER, PAUSE, REHYDRATE, PERSIST, PURGE} from "redux-persist";

// const reducer = combineReducers({
//     appSlice: applicationSlice
// })

const persistConfig = {
  key: "application",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, applicationSlice);


export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore['dispatch'];

export const Dispatch = useDispatch.withTypes<AppDispatch>();
export const UseSelector: TypedUseSelectorHook<ReturnType<AppStore["getState"]>> = useSelector;
