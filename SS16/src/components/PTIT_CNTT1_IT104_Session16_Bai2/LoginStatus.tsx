import React, { Component } from 'react';

interface State {
  isLoggedIn: boolean;
}

export default class LoginStatus extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleLogin = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  };

  render() {
    const containerStyle: React.CSSProperties = {
      backgroundColor: '#1e1e1e',
      padding: '30px',
      borderRadius: '10px',
      width: '400px',
      margin: '40px auto',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    };

    const boxStyle: React.CSSProperties = {
      backgroundColor: '#eaf6ff',
      padding: '30px',
      borderRadius: '15px'
    };

    const messageStyle: React.CSSProperties = {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    };

    const buttonStyle: React.CSSProperties = {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px'
    };

    const { isLoggedIn } = this.state;

    return (
      <div style={containerStyle}>
        <div style={boxStyle}>
          <div style={messageStyle}>
            {isLoggedIn ? '✅ Xin chào, User!' : '🔒 Vui lòng đăng nhập để tiếp tục.'}
          </div>
          <button onClick={this.toggleLogin} style={buttonStyle}>
            {isLoggedIn ? 'Đăng xuất' : 'Đăng nhập'}
          </button>
        </div>
      </div>
    );
  }
}
