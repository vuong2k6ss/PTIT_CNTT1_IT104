// src/redux/slices/auth.slice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
}

interface AuthState {
  users: User[];
  loggedInUser: User | null;
}

const initialState: AuthState = {
  users: [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      email: "nva@gmail.com",
      password: "123456",
    },
    {
      id: 2,
      userName: "Trần Thị B",
      email: "nvb@gmail.com",
      password: "654321",
    },
  ],
  loggedInUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.loggedInUser = user;
      } else {
        alert("Sai email hoặc mật khẩu!");
      }
    },
    logout: (state) => {
      state.loggedInUser = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
