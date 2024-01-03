import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/workflows/login.slice";

/*
const middleware = (getDefaultMiddleware) => {
  if (process.env.NODE_ENV === "development") {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  }
  return getDefaultMiddleware();
};

const store = configureStore({
  reducer: {
    login: loginSlice,
  },
  middleware,
});

*/

const store = configureStore({
  reducer: {
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
