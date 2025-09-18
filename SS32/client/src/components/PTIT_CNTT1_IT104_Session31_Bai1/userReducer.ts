type UserAction = {
  type: string;
  payload?: unknown;
};

export type UserState = {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
};

const initialState: UserState = {
  id: 1,
  userName: "Nguyễn Văn Nam",
  gender: "Nam",
  dateBirth: "20/03/2023",
  address: "Thanh Xuân, Hà Nội",
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
