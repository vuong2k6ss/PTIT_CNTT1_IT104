import { legacy_createStore, combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
