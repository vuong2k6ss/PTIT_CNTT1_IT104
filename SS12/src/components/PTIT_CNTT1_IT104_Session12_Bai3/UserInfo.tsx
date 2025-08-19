

const UserInfo = () => {
  const user = {
    fullName: 'Nguyễn Văn A',
    gender: 'Nam',
    dob: '06/03/2024',
    email: 'nva@gmail.com',
    address: 'Thanh Xuân, Hà Nội'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2 style={{ fontWeight: 'bold' }}>Thông tin cá nhân</h2>
      <ul style={{
        display: 'inline-block',
        textAlign: 'left',
        fontSize: '18px',
        marginTop: '20px'
      }}>
        <li><strong>Họ và tên:</strong> {user.fullName}</li>
        <li><strong>Giới tính:</strong> {user.gender}</li>
        <li><strong>Ngày sinh:</strong> {user.dob}</li>
        <li><strong>Email:</strong> <span style={{ color: 'blue' }}>{user.email}</span></li>
        <li><strong>Địa chỉ:</strong> {user.address}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
