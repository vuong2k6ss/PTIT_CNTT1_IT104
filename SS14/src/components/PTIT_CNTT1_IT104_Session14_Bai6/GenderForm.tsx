import React, { Component } from "react";

interface GenderState {
  gender: string;
  submittedGender: string;
}

export default class Gender extends Component<object, GenderState> {
  state: GenderState = {
    gender: "",
    submittedGender: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = () => {
    this.setState({ submittedGender: this.state.gender });
  };

  render() {
    return (
      <div
        style={{
          border: "1px solid #fff",
          borderRadius: "12px",
          padding: "16px",
          width: "200px",
          margin: "20px auto",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Tiêu đề + kết quả sau khi submit */}
        <p style={{ marginBottom: "10px", color: "black"}}>
          Giới tính: {this.state.submittedGender && this.state.submittedGender}
        </p>

        {/* Các lựa chọn radio */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "flex-start",
            marginLeft: "20px",
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: "6px" ,color: "black" }}>
            <input
              type="radio"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: "6px", color: "black" }}>
            <input
              type="radio"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: "6px", color: "black" }}>
            <input
              type="radio"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>
        </div>

        {/* Nút submit */}
        <button
          onClick={this.handleSubmit}
          style={{
            marginTop: "14px",
            padding: "8px 14px",
            borderRadius: "8px",
            border: "1px solid #837777ff",
            backgroundColor: "gray",
            color: "white",
            fontWeight: "bold",
            width: "100%",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}