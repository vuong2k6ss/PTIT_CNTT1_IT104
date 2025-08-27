/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

export default function UserList() {
  const users: User[] = [
    { id: 1, name: "Nam", age: 17 },
    { id: 2, name: "Lan", age: 20 },
    { id: 3, name: "Huy", age: 22 },
    { id: 4, name: "Mai", age: 15 },
    { id: 5, name: "Linh", age: 19 },
  ];

  const filteredUsers = useMemo(() => {
    console.log("Đang lọc danh sách người dùng...");
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div>
      <h2>Danh sách người dùng trên 18 tuổi</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}