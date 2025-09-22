import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import type { Student } from '../utils/types';
import { useAppDispatch } from '../hooks/useRedux';

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  editStudent?: Student | null;
  setEditStudent?: (student: Student | null) => void;
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, editStudent, setEditStudent }) => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<Student>({
    id: '',
    name: '',
    gender: 'Nam',
    birthday: '',
    hometown: '',
    address: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (editStudent) {
      setForm(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Xóa lỗi khi người dùng nhập
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.id.trim()) newErrors.id = 'Mã sinh viên không được bỏ trống';
    if (!form.name.trim()) newErrors.name = 'Tên sinh viên không được bỏ trống';
    if (!form.birthday.trim()) newErrors.birthday = 'Ngày sinh không được bỏ trống';
    if (!form.hometown.trim()) newErrors.hometown = 'Nơi sinh không được bỏ trống';
    if (!form.address.trim()) newErrors.address = 'Địa chỉ không được bỏ trống';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const actionType = editStudent ? 'EDIT' : 'ADD';
    dispatch({
      type: actionType,
      payload: form,
    });

    onSubmit(form);

    // Reset form sau khi submit
    setForm({
      id: '',
      name: '',
      gender: 'Nam',
      birthday: '',
      hometown: '',
      address: '',
    });
    setErrors({});
    if (setEditStudent) setEditStudent(null);
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">{editStudent ? 'Chỉnh Sửa Sinh Viên' : 'Thêm Sinh Viên'}</h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          name="id"
          value={form.id}
          onChange={handleChange}
          fullWidth
          error={!!errors.id}
          helperText={errors.id}
        />
        <TextField
          label="Tên sinh viên"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          error={!!errors.name}
          helperText={errors.name}
        />
        <Select name="gender" value={form.gender} onChange={handleChange} fullWidth>
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          label="Ngày sinh"
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          error={!!errors.birthday}
          helperText={errors.birthday}
        />
        <TextField
          label="Nơi sinh"
          name="hometown"
          value={form.hometown}
          onChange={handleChange}
          fullWidth
          error={!!errors.hometown}
          helperText={errors.hometown}
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          fullWidth
          error={!!errors.address}
          helperText={errors.address}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {editStudent ? 'Cập Nhật' : 'Thêm'}
        </Button>
        {editStudent && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setEditStudent && setEditStudent(null)}
          >
            Hủy
          </Button>
        )}
      </div>
    </div>
  );
};

export default StudentForm;