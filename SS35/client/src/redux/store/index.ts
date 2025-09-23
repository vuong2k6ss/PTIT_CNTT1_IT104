import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counter.slice";
import randomNumSlice from "../slices/randomNumber";
import themeSlice from "../slices/theme.slice";
import viewModeSlice from "../slices/viewMode.slice";
import menuSlice from "../slices/menu.slice";
import languageSlice from "../slices/language.slice";
import userReducer from "../slices/user.slice";
import authReducer from "../slices/auth.slice";

//nơi lưu trữ dữ liệu tập trung cho toàn bộ dự án
export const store = configureStore({
  reducer: {
    counter: counterSlice, //bài tập 1
    randomNum: randomNumSlice, //bt2
    theme: themeSlice, //bt3
    viewMode: viewModeSlice, //bt4
    menu: menuSlice, // bài 5
    language: languageSlice, // bài 6
    user: userReducer, //bai 7
    auth: authReducer, //bai 8
  }, //
}); //truyền danh sách các đối tượng

//định nghĩa type cho toàn bộ state
export type RootState = ReturnType<typeof store.getState>;
//định nghĩa cho các dispatch
export type AppDispatch = typeof store.dispatch;
