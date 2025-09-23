import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface User {
  id: number;
  name: string;
  isFavorite: boolean;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [
    { id: 1, name: "Nguyễn Văn A", isFavorite: false },
    { id: 2, name: "Nguyễn Văn B", isFavorite: false },
    { id: 3, name: "Nguyễn Văn C", isFavorite: false },
    { id: 4, name: "Nguyễn Văn D", isFavorite: false },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.isFavorite = !user.isFavorite;
      }
    },
  },
});

export const { toggleFavorite } = userSlice.actions;
export default userSlice.reducer;
