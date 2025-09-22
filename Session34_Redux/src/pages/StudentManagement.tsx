import type { Student } from '../utils/types';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import Toolbar from '../components/Toolbar';
import { useState } from 'react';

const StudentManagement = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: 'SV001', name: 'Nguyễn Văn A',  gender: 'Nam', birthday: '2003-01-01', hometown: 'Hà Nội', address: '123 Đường Láng' },
    { id: 'SV002', name: 'Nguyễn Văn B',  gender: 'Nữ', birthday: '2002-02-02', hometown: 'TP.HCM', address: '456 Lê Lợi' },
    { id: 'SV003', name: 'Nguyễn Văn C', gender: 'Nam', birthday: '2004-03-03', hometown: 'Đà Nẵng', address: '789 Nguyễn Huệ' },
  ]);
  const [editStudent, setEditStudent] = useState<Student | null>(null);

  const handleAddStudent = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  const handleEditStudent = (student: Student) => {
    setEditStudent(student);
  };

  const handleSearch = (keyword: string) => {
    setStudents((prev) =>
      prev.filter((s) => s.name.toLowerCase().includes(keyword.toLowerCase())),
    );
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} />
        <StudentList students={students} onEdit={handleEditStudent} />
      </div>
      <StudentForm onSubmit={handleAddStudent} editStudent={editStudent} setEditStudent={setEditStudent} />
    </div>
  );
};

export default StudentManagement;