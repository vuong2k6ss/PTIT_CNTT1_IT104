import { useAppDispatch, useAppSelector } from "../hooks/useCustomeRedux";
import { toggleFavorite } from "../redux/slices/user.slice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

export default function User() {
  const users = useAppSelector((state) => state.user.users);
  const dispatch = useAppDispatch();

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", width: 250 }}>
      <h3>List Favorites User</h3>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: 10 }}>
          <p>UserName: {user.name}</p>
          <p>
            Favorites:{" "}
            {user.isFavorite ? (
              <HeartFilled
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => dispatch(toggleFavorite(user.id))}
              />
            ) : (
              <HeartOutlined
                style={{ color: "gray", cursor: "pointer" }}
                onClick={() => dispatch(toggleFavorite(user.id))}
              />
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
