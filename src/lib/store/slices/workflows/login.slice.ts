import { loginItem } from "@/lib/typings/core/login.typings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../../index";

const initialState: loginItem = {
  id: "",
  imageUrl: "",
  accessToken: "",
};

export const loginSlice = createSlice({
  name: "login_slice",
  initialState,
  reducers: {
    updateLoginState: (state, action: PayloadAction<loginItem>) => {
      const { id, imageUrl, accessToken } = action.payload;
      state.id = id;
      state.imageUrl = imageUrl;
      state.accessToken = accessToken;
    },
  },
});

export const { updateLoginState } = loginSlice.actions;
export const addLoginState = (state: RootState) => state.login;
export default loginSlice.reducer;
