import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '8px',
    marginTop: '16px',
    paddingRight: '16px',
  },
  button: {
    width: '32px',
    height: '32px',
    border: '1px solid #ccc',
    borderRadius: '50%',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    color: '#333',
    transition: 'all 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#007bff',
    color: 'white',
    borderColor: '#007bff',
  },
};

const Pagination = () => {
  return (
    <div style={styles.container}>
      <button style={styles.button}>{'<'}</button>
      <button style={{ ...styles.button, ...styles.activeButton }}>1</button>
      <button style={styles.button}>2</button>
      <button style={styles.button}>3</button>
      <button style={styles.button}>4</button>
      <button style={styles.button}>{'>'}</button>
    </div>
  );
};

export default Pagination;
