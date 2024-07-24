// The storage function specifies the storage engine to be used for persisting the state(localStorage in web).

import createWebStorage from "redux-persist/lib/storage/createWebStorage";


export const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

export const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export default storage;