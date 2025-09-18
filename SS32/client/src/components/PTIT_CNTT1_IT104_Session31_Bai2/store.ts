import { legacy_createStore, combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
