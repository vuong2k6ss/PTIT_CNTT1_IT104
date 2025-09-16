import "../assets/StudentManager.css"; 
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function StudentManager() {
  const [students, setStudents] = useState([]);
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const index = Number(e.currentTarget.getAttribute("data-id"));
    console.log(index);
    
    axios.delete(`http://localhost:8080/student/${index}`);
    setStudents(students.filter(student => student.id !== index + 1));
  }
  useEffect(() => {
    axios
      .get("http://localhost:8080/student")
      .then((res) => {
        setStudents(res.data);
      })
      .catch(() => {
        alert("Không lấy được dữ liệu");
      });
  }, []);
  return (
    <div className="container">
      <div className="header">
        <h2>
          Quản lý <span>sinh viên</span>
        </h2>
        <button className="btn-add">
          <i className="fa fa-plus"></i> Thêm mới sinh viên
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>{s.student_name}</td>
              <td>{s.email}</td>
              <td>{s.address}</td>
              <td>{s.phone}</td>
              <td className="action">
                <i className="fa fa-pen">Sửa</i>
                <i className="fa fa-trash" data-id={s.id - 1} onClick={handleDelete}>Xóa</i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <div>
          Hiển thị <b>{students.length}/10</b> bản ghi
        </div>
        <ul className="pagination">
          <li>
            <a href="#">Trước</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#" className="active">
              3
            </a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">Sau</a>
          </li>
        </ul>
      </div>
    </div>
  );
}