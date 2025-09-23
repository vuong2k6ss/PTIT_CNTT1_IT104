import { createSlice } from "@reduxjs/toolkit";

interface RandomNumState {
  list: number[];
}

const initialState: RandomNumState = {
  list: [],
};

const randomNumSlice = createSlice({
  name: "randomNum",
  initialState,
  reducers: {
    randomNumber(state) {
      const length = Math.floor(Math.random() * 5) + 3; // danh sách dài 3-7 phần tử
      const newList = Array.from(
        { length },
        () => Math.floor(Math.random() * 20) // số từ 0-19
      );
      state.list = newList;
    },
  },
});

export const { randomNumber } = randomNumSlice.actions;
export default randomNumSlice.reducer;
