import { legacy_createStore, combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
