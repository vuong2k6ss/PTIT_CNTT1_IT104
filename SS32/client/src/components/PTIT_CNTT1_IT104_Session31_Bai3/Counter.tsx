// src/PTIT_CNTT1_IT104_Session31_Bai3/Counter.tsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { decrement, increment } from "./counterReducer";

const Counter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
    </div>
  );
};

export default Counter;
