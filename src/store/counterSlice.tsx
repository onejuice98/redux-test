import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  id: number;
  value: number;
};

const initialState: InitialState = {
  id: 1,
  value: 0,
};

// createSlice로 slice 생성
// 객체를 인자로 받고 name, initialState, reducers 필수
/**
 * @param name 이름
 * @param initialState 초기 상태
 * @param reducers 메소드(함수)
 */
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
    down: (state, action) => {
      state.value = state.value - action.payload;
    },
    init: (state, action) => {
      state.value = 0;
    },
  },
});

export default counterSlice;
export const { up, down, init } = counterSlice.actions;
