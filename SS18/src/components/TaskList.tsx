import { useContext } from "react";
import TaskItem from "./TaskItem";
import { TaskContext } from "../context/TaskContext";
import type { Task } from "../interfaces/task.interface";

export default function TaskList() {
  // Bước 3: Lấy giá trị từ context thông qua hook useContext
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <ul className="list-group my-3">
        {tasks.map((task: Task) => (
          <>
            {/* Phần hiển thị các TaskItem */}
            <TaskItem />
          </>
        ))}
      </ul>
    </>
  );
}