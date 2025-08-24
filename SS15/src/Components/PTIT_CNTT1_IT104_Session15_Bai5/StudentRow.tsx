import React from 'react';

type Student = {
  id: number;
  code: string;
  name: string;
  birthday: string;
  email: string;
  status: 'active' | 'inactive';
};

const StudentRow = ({ index, student }: { index: number; student: Student }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{student.code}</td>
      <td>{student.name}</td>
      <td>{student.birthday}</td>
      <td>{student.email}</td>
      <td>
        <span
          style={{
            padding: '4px 8px',
            borderRadius: '6px',
            backgroundColor: student.status === 'active' ? '#d4f4dd' : '#ffd6d6',
            color: student.status === 'active' ? '#2e7d32' : '#c62828'
          }}
        >
          {student.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động'}
        </span>
      </td>
      <td>
        <button>Chặn</button>
        <button>Sửa</button>
        <button>Xóa</button>
      </td>
    </tr>
  );
};

export default StudentRow;
