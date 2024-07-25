'use client'
import React from 'react'
import { Provider } from "react-redux";
import { AppStore, makeStore } from '../redux/store';
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';

const ReduxProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {

    const storeRef = React.useRef<AppStore>()
    if (!storeRef.current) {
      storeRef.current = makeStore()
    }
    const persistor = persistStore(storeRef.current);
  return (
    <Provider store={storeRef.current}>
       <PersistGate loading={null} persistor={persistor}>
       {children}
       </PersistGate>
    </Provider>
  )
}

export default ReduxProvider