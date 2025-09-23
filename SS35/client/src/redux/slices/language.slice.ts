import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  current: "en" | "vi";
}

const initialState: LanguageState = {
  current: "en", // mặc định English
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.current = action.payload; // "en" hoặc "vi"
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
