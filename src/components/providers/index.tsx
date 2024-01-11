"use client";
import React, { PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Provider } from "react-redux";
import store, { persistor } from "@/lib/store";
import { PersistGate } from "redux-persist/integration/react";
import "@mantine/core/styles.css";


const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </MantineProvider>
  );
};

export default AppProviders;
