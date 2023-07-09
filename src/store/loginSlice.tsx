import { createSlice } from "@reduxjs/toolkit";

type LoginState = {
  id: string;
  password: string;
  nickName: string;
};

const initLoginState: LoginState = {
  id: "",
  password: "",
  nickName: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: initLoginState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setNickName: (state, action) => {
      state.nickName = action.payload;
    },
  },
});

export default loginSlice;
export const { setId, setPassword, setNickName } = loginSlice.actions;
