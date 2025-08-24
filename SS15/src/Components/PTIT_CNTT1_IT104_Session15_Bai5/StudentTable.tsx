import React from 'react';
import StudentRow from './StudentRow';

type Student = {
  id: number;
  code: string;
  name: string;
  birthday: string;
  email: string;
  status: 'active' | 'inactive';
};

const StudentTable = () => {
  const students: Student[] = [
    {
      id: 1,
      code: 'SV001',
      name: 'Nguyễn Văn A',
      birthday: '2023-12-21',
      email: 'nva@gmail.com',
      status: 'active' 
    },
    {
      id: 2,
      code: 'SV002',
      name: 'Nguyễn Thị B',
      birthday: '2022-11-21',
      email: 'ntb@gmail.com',
      status: 'inactive' 
    }
  ];

  return (
    <table style={{ border: '0px solid gray', borderCollapse: 'collapse' }} border={1} cellPadding={8} cellSpacing={0} width="100%">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <StudentRow key={student.code} index={index} student={student} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
