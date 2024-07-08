import { loginItem } from "@/lib/typings/core/login.typings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../../index";

const initialState: loginItem = {
  profileImage: "",
  name: "",
  email: "",
  phoneNumber: "",
  accessToken: "",
  role: "",
};

export const loginSlice = createSlice({
  name: "login_slice",
  initialState,
  reducers: {
    updateLoginState: (state, action: PayloadAction<loginItem>) => {
      const { name, email, phoneNumber, profileImage, accessToken,role } =
        action.payload;
      state.name = name;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.profileImage = profileImage;
      state.accessToken = accessToken;
      state.role = role;
    },
  },
});

export const { updateLoginState } = loginSlice.actions;
export const addLoginState = (state: RootState) => state.login;
export default loginSlice.reducer;
