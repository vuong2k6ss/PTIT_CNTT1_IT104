function formatName(user: { firstName: string; lastName: string }): string {
  return `${user.firstName} ${user.lastName}`;
}

const FormatName = () => {
  const user = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  return (
    <div>
      <h3>Họ và tên: <strong>{formatName(user)}</strong></h3>
    </div>
  );
};

export default FormatName;
