import React from 'react';
import SearchFilter from './SearchFilter';
import StudentTable from './StudentTable';
import Pagination from './Pagination';

const StudentPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Quản lý sinh viên</h2>
      <SearchFilter />
      <StudentTable />
      <Pagination />
    </div>
  );
};

export default StudentPage;
