export type User = {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
};

const initialState: User[] = [
  {
    id: 1,
    userName: "Nguyễn Văn A",
    gender: "Nam",
    dateBirth: "20/11/2023",
    address: "Thanh Xuân, Hà Nội",
  },
  {
    id: 2,
    userName: "Nguyễn Thị B",
    gender: "Nữ",
    dateBirth: "20/11/2023",
    address: "Cầu Giấy, Hà Nội",
  },
];

const userReducer = (
  state = initialState,
  action: { type: string }
): User[] => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
