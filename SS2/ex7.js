// Định nghĩa hàm formatDate
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

// Export hàm để sử dụng bên ngoài
module.exports = formatDate;

// Import hàm formatDate từ file formatData.js
const formatDate = require('./formatData');

// Tạo đối tượng Date hiện tại
const today = new Date();

// Gọi hàm và in kết quả ra console
console.log(formatDate(today));
