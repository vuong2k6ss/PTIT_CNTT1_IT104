import React, { Component } from 'react';

interface State {
  count: number;
}

export default class ClickCounter extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const containerStyle: React.CSSProperties = {
      backgroundColor: '#f0f0f0',
      padding: '30px',
      borderRadius: '10px',
      width: '300px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      margin: '50px auto',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
    };

    const buttonStyle: React.CSSProperties = {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    };

    return (
      <div style={containerStyle}>
        <h3>Bạn đã click {this.state.count} lần.</h3>
        <button onClick={this.handleClick} style={buttonStyle}>
          Click me!
        </button>
      </div>
    );
  }
}
