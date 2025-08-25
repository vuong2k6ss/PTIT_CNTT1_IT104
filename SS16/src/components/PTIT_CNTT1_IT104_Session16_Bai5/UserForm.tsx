import React, { Component } from 'react';
import './UserForm.css'; // import CSS

interface State {
  name: string;
  email: string;
  age: string;
  error: string;
  submitted: boolean;
}

export default class UserForm extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
      error: '',
      submitted: false
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: '', submitted: false } as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, age } = this.state;

    if (!email.includes('@')) {
      this.setState({ error: '⚠️ Email không hợp lệ', submitted: false });
    } else if (parseInt(age) < 0) {
      this.setState({ error: '⚠️ Tuổi không được âm', submitted: false });
    } else {
      this.setState({ error: '', submitted: true });
    }
  };

  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      age: '',
      error: '',
      submitted: false
    });
  };

  render() {
    const { name, email, age, error, submitted } = this.state;

    return (
      <div className="form-container">
        <h3> Nhập thông tin người dùng</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ tên"
            value={name}
            onChange={this.handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            className="form-input"
          />
          <input
            type="number"
            name="age"
            placeholder="Tuổi"
            value={age}
            onChange={this.handleChange}
            className="form-input"
          />
          <div>
            <button type="submit" className="form-button">Gửi</button>
            <button type="button" onClick={this.handleReset} className="form-button">Xóa tất cả</button>
          </div>
        </form>

        {error && <div className="form-error">{error}</div>}

        {submitted && (
          <div className="form-result">
            <strong>✅ Thông tin đã nhập:</strong>
            <p>Họ tên: {name}</p>
            <p>Email: {email}</p>
            <p>Tuổi: {age}</p>
          </div>
        )}
      </div>
    );
  }
}
