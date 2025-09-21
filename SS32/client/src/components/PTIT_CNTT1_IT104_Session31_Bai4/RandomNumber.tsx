import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { addRandomNumber } from "./randomReducer";

const RandomNumber: React.FC = () => {
  const numbers = useSelector((state: RootState) => state.randomNumbers);
  const dispatch = useDispatch();

  const handleClick = () => {
    const random = Math.floor(Math.random() * 100); 
    dispatch(addRandomNumber(random));
  };

  return (
    <div>
      <h2>[{numbers.join(", ")}]</h2>
      <button onClick={handleClick}>Generate Random Number</button>
    </div>
  );
};

export default RandomNumber;
