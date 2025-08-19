const ColorBox = ({ color }: { color: string }) => {
  const boxStyle: React.CSSProperties = {
    backgroundColor: color,
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px',
    margin: '10px'
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={boxStyle}>Box</div>
      <p><code>{color}</code></p>
    </div>
  );
};

export default ColorBox;
