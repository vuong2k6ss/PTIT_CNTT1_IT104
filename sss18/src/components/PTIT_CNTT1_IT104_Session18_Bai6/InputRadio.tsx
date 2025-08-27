import { useReducer } from "react";

type Action = { type: "SET_GENDER"; payload: string };

const reducer = (state: string, action: Action): string => {
  switch (action.type) {
    case "SET_GENDER":
      return action.payload;
    default:
      return state;
  }
};

export default function InputRadio() {
  const [gender, dispatch] = useReducer(reducer, "Nam");

  return (
    <div>
      <div>
        <input
          type="radio"
          id="male"
          name="gender"
          value="Nam"
          checked={gender === "Nam"}
          onChange={(e) =>
            dispatch({ type: "SET_GENDER", payload: e.target.value })
          }
        />
        <label htmlFor="male">Nam</label>
      </div>

      <div>
        <input
          type="radio"
          id="female"
          name="gender"
          value="Nữ"
          checked={gender === "Nữ"}
          onChange={(e) =>
            dispatch({ type: "SET_GENDER", payload: e.target.value })
          }
        />
        <label htmlFor="female">Nữ</label>
      </div>

      <div>
        <input
          type="radio"
          id="other"
          name="gender"
          value="Khác"
          checked={gender === "Khác"}
          onChange={(e) =>
            dispatch({ type: "SET_GENDER", payload: e.target.value })
          }
        />
        <label htmlFor="other">Khác</label>
      </div>

      <p>Selected gender: {gender}</p>
    </div>
  );
}