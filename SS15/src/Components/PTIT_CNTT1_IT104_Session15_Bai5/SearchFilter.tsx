import React from 'react';

const SearchFilter = () => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <button style={{backgroundColor: "blue", color: "white"}}>Thêm mới sinh viên</button>
      <select style={{ margin: '0 16px', width: '200px',height: '36px',padding: '0 8px',fontSize: '14px' }}>
        <option>Sắp xếp theo tuổi</option>
      </select>
      <input style={{ margin: '0 16px', width: '250px',height: '36px',padding: '0 8px',fontSize: '14px' }} type="text" placeholder="Tìm kiếm từ khóa theo tên hoặc email" />
    </div>
  );
};

export default SearchFilter;
