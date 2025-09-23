// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux"
import { decrease, increase, reset } from "../redux/slices/counter.slice";
import {  useAppDispatch, useAppSelector } from "../hooks/useCustomeRedux";


export default function Counter() {
  //lấy gtri store và render ra ngoài giao diện 
  // const result = useSelector((state) => state.counter); CÁCH CŨ
  const result = useAppSelector((state) => state.counter.value)

  //truyền hành đọng từ components lên reducer để xử lý cần dùng useDispatch
  //  const dispatch = useDispatch(); cách cũ
  const dispatch = useAppDispatch();
  const handleIncrease = () => {
    dispatch(increase());
  }

  const handleDecrease = () => {
    dispatch(decrease());
  }

  const handleReset = () => {
    dispatch(reset());
  }



  console.log("result", result);
  
    
  return (
    <div>
      <h2>Counter: {result}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>

    </div>
  )
}
