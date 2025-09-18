// src/PTIT_CNTT1_IT104_Session31_Bai3/counterReducer.ts

// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = 0, action: { type: string }): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
