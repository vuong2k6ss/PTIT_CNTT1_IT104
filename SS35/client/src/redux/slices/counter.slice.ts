import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter", //phân biệt các reducer các slice với nhau
  initialState, // giá trị khởi tạo
  reducers: {
    //xử lý state(tác vụ đồng bộ)
    increase(state) {
      state.value += 1;
    },
    decrease(state) {
      state.value -= 1;
    },
    reset(state) {
      state.value = 0;
    },
  }, //chứa hàm cập nhật gtri hiện tại state
});

export default counterSlice.reducer; // làm cho couterSlice là 1 reducer
export const { increase, decrease, reset } = counterSlice.actions; //phương thức
