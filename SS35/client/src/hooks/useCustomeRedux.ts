//Custome hook thay vì dử dụng use Dispatch và use Selector

import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
