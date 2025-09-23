
import {  useAppDispatch, useAppSelector } from "../hooks/useCustomeRedux";
import { randomNumber } from "../redux/slices/randomNumber";

export default function RandomList() {
  const list = useAppSelector((state) => state.randomNum.list);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>List number: [{list.join(", ")}]</h2>
      <button onClick={() => dispatch(randomNumber())}>Random number</button>
    </div>
  );
}
