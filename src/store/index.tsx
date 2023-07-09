import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import loginSlice from "./loginSlice";

// configureStore를 통해서 store 생성
const store = configureStore({
  // 여러 slice를 모아주는 역할
  reducer: {
    counter: counterSlice.reducer,
    login: loginSlice.reducer,
  },
});

// 자동으로 slice의 initState의 타입을 가져온다.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
