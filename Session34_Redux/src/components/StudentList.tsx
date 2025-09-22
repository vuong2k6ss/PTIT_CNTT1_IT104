import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import React from 'react';
import type { Student } from '../utils/types';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = () => {
  const dispatch = useAppDispatch()
  const {student: students} =  useAppSelector((store)=> store)

  // hàm xóa sinh viên
  const handleDelete = (id: string) => {
  dispatch({type: "DELETE", payload: {id: id}})
  }

  
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Mã sinh viên</TableCell>
            <TableCell>Tên sinh viên</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((s, i) => (
            <TableRow key={s.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.gender}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="contained" color="error">
                    Xem
                  </Button>
                  <Button variant="contained" color="warning">
                    Sửa
                  </Button>
                  <Button onClick={() => handleDelete(s.id || "")} variant="contained" color="success">
                    Xóa
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
