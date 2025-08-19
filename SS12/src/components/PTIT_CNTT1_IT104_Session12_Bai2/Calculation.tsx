

const Calculation = () => {
  const a = 10;
  const b = 10;

  const add = (x: number, y: number): number => x + y;
  const subtract = (x: number, y: number): number => x - y;
  const multiply = (x: number, y: number): number => x * y;
  const divide = (x: number, y: number): number => x / y;

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2 style={{ fontWeight: 'bold' }}>Danh sách kết quả</h2>
      <ul style={{ 
        display: 'inline-block',
        textAlign: 'left',
        fontSize: '18px',
        marginTop: '20px'
      }}>
        <li>{`${a} + ${b} = ${add(a, b)}`}</li>
        <li>{`${a} - ${b} = ${subtract(a, b)}`}</li>
        <li>{`${a} * ${b} = ${multiply(a, b)}`}</li>
        <li>{`${a} / ${b} = ${divide(a, b)}`}</li>
      </ul>
    </div>
  );
};

export default Calculation;
