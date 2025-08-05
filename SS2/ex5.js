// Tạo biến danh bạ rỗng
let phoneBooks = [];

// Hàm thêm liên hệ vào danh bạ
function addContact(name, phone, email) {
  const contact = {
    name: name,
    phone: phone,
    email: email
  };
  phoneBooks.push(contact);
}

// Hàm hiển thị toàn bộ danh bạ
function displayContact() {
  console.log("===== Danh bạ liên hệ =====");
  for (let contact of phoneBooks) {
    console.log(`Tên: ${contact.name}`);
    console.log(`SĐT: ${contact.phone}`);
    console.log(`Email: ${contact.email}`);
    console.log("---------------------------");
  }
}


addContact("Nguyễn Văn A", "0123456789", "a@gmail.com");
addContact("Lê Thị B", "0987654321", "b@yahoo.com");
displayContact();
