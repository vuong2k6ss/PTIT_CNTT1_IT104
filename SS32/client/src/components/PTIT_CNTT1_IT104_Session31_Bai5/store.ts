import { legacy_createStore, combineReducers } from "redux";
import companyReducer from "./companyReducer";

const rootReducer = combineReducers({
  company: companyReducer,
});

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
