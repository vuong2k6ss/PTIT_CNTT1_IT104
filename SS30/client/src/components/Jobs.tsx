import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import axios from "axios";

interface Job {
  id: number;
  name: string;
  completed: boolean;
}

export default function JobInterface() {
  const [input, setInput] = useState("");
  const [editName, setEditName] = useState("");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<Job[]>("http://localhost:8080/jobs")
      .then((res) => setJobs(res.data))
      .catch(() => alert("Không lấy được dữ liệu"));
  }, []);

  const handleAdd = async () => {
    if (!input.trim()) {
      alert("Tên công việc không được để trống");
      return;
    }
    try {
      const newJob = { name: input.trim(), completed: false };
      const res = await axios.post<Job>("http://localhost:8080/jobs", newJob);
      setJobs((prev) => [...prev, res.data]);
      setInput("");
    } catch {
      alert("Thêm công việc thất bại");
    }
  };

  const handleEditOpen = (job: Job) => {
    setEditId(job.id);
    setEditName(job.name);
  };

  const handleUpdate = async () => {
    if (editId === null) return;
    try {
      await axios.put(`http://localhost:8080/jobs/${editId}`, {
        name: editName,
        completed: jobs.find((j) => j.id === editId)?.completed ?? false,
      });
      setJobs((prev) =>
        prev.map((j) => (j.id === editId ? { ...j, name: editName } : j))
      );
    } catch {
      alert("Cập nhật thất bại");
    }
  };

  const handleToggleStatus = async (job: Job) => {
    try {
      const updated = { ...job, completed: !job.completed };
      await axios.put(`http://localhost:8080/jobs/${job.id}`, updated);
      setJobs((prev) =>
        prev.map((j) => (j.id === job.id ? updated : j))
      );
    } catch {
      alert("Đổi trạng thái thất bại");
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Bạn có chắc muốn xóa?")) return;
    try {
      await axios.delete(`http://localhost:8080/jobs/${id}`);
      setJobs((prev) => prev.filter((j) => j.id !== id));
    } catch {
      alert("Xóa thất bại");
    }
  };

  const deleteAll = async () => {
    if (!window.confirm("Xóa tất cả công việc?")) return;
    await Promise.all(
      jobs.map((j) => axios.delete(`http://localhost:8080/jobs/${j.id}`))
    );
    setJobs([]);
  };
  return (
    <div className="border rounded shadow-md p-3 container w-50 d-flex flex-column gap-4">
      <div className="header">
        <h3>Quản lý công việc</h3>
      </div>

      {/* Input thêm công việc */}
      <div className="d-flex flex-column border p-3 rounded shadow-lg gap-3">
        <input
          type="text"
          className="bg-white border border-secondary w-100 p-1 rounded"
          placeholder="Nhập tên công việc"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Thêm công việc
        </button>
      </div>

      <div className="d-flex gap-3 justify-content-center border rounded p-3 shadow-lg">
        <button className="btn border-secondary-subtle">
          Tất cả
        </button>
        <button className="btn border-secondary-subtle">
          Hoàn thành
        </button>
        <button className="btn border-secondary-subtle">
          Đang thực hiện
        </button>
      </div>

      <div className="d-flex flex-column gap-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="d-flex justify-content-between align-items-center border rounded p-1 shadow-md"
          >
            <div>
              <input
                type="checkbox"
                checked={job.completed}
                onChange={() => handleToggleStatus(job)}
              />
              <span className={`fs-6 text ${job.completed ? "text-decoration-line-through" : ""}`}>
                {" "}{job.name}
              </span>
            </div>
            <div>
              <button className="btn" onClick={() => handleEditOpen(job)}>
                <i
                  className="bi bi-pencil-square text-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                ></i>
              </button>
              <button className="btn" onClick={() => handleDelete(job.id)}>
                <i className="bi bi-trash-fill text-danger"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between">
        <button className="text-light btn btn-danger">
          Xóa công việc hoàn thành
        </button>
        <button className="text-light btn btn-danger" onClick={deleteAll}>
          Xóa tất cả công việc
        </button>
      </div>

      {/* Modal sửa tên */}
      <div
        className="modal fade"
        id="editModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModalLabel">
                Sửa tên công việc
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="w-100 p-2 rounded"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleUpdate}
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}