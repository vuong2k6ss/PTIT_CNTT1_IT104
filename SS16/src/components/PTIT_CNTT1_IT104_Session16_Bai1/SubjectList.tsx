import React, { Component } from 'react';

export default class SubjectList extends Component {
  render() {
    const subjects = ['Toán', 'Văn', 'Anh', 'Hóa', 'Sinh'];

    const containerStyle: React.CSSProperties = {
      backgroundColor: '#1e1e1e',
      padding: '20px',
      borderRadius: '10px',
      width: '300px',
      margin: 'auto',
      color: '#f0f0f0',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      marginTop: '50px'
    };

    const titleStyle: React.CSSProperties = {
      fontSize: '24px',
      marginBottom: '20px'
    };

    const itemStyle: React.CSSProperties = {
      backgroundColor: '#e0faff',
      color: '#004080',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '10px',
      fontWeight: '500'
    };

    return (
      <div style={containerStyle}>
        <h2 style={titleStyle}> Danh sách môn học</h2>
        {subjects.map((subject, index) => (
          <div key={index} style={itemStyle}>
            {subject}
          </div>
        ))}
      </div>
    );
  }
}
