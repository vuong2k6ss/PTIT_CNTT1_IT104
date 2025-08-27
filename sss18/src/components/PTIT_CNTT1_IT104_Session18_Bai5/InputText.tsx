import { useReducer } from "react";

type Action = { type: "SET_TEXT"; payload: string };

const reducer = (state: string, action: Action): string => {
  switch (action.type) {
    case "SET_TEXT":
      return action.payload;
    default:
      return state;
  }
};

export default function InputText() {
  const [text, dispatch] = useReducer(reducer, "");

  return (
    <div>
      <h2>{text || "Input change"}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) =>
          dispatch({ type: "SET_TEXT", payload: e.target.value })
        }
        placeholder="Nhập chuỗi..."
      />
    </div>
  );
}