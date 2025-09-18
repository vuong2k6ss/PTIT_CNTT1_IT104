import { legacy_createStore, combineReducers } from "redux";
import modeReducer from "./modeReducer";

const rootReducer = combineReducers({
  darkMode: modeReducer,
});

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
