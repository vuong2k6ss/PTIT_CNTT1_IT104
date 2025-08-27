import React, { useReducer, useEffect, useState } from "react";

// 1. Định nghĩa kiểu công việc
interface Todo {
  id: number;
  text: string;
}

// 2. Định nghĩa action
type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "REMOVE_TODO"; payload: number }
  | { type: "SET_TODOS"; payload: Todo[] };

// 3. Hàm reducer
const reducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
      };
      const updatedTodos = [...state, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    case "REMOVE_TODO": {
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(filteredTodos));
      return filteredTodos;
    }

    case "SET_TODOS": {
      return action.payload;
    }

    default:
      return state;
  }
};

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  // 4. Lấy dữ liệu từ localStorage khi load trang
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    dispatch({ type: "SET_TODOS", payload: storedTodos });
  }, []);

  // 5. Xử lý thêm công việc
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: input });
      setInput("");
    }
  };

  // 6. Xử lý xóa công việc (thêm confirm)
  const handleRemoveTodo = (id: number) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa công việc này?"
    );
    if (confirmDelete) {
      dispatch({ type: "REMOVE_TODO", payload: id });
    }
  };

  // 7. Render giao diện
  return (
    <div style={{ width: "400px", margin: "20px auto", fontFamily: "Arial" }}>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập tên công việc"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </form>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <span>{todo.text}</span>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}