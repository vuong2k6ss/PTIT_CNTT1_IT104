import { legacy_createStore, combineReducers } from "redux";
import randomReducer from "./randomReducer";

const rootReducer = combineReducers({
  randomNumbers: randomReducer,
});

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
