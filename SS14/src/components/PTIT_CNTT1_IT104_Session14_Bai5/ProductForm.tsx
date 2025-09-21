import { Component } from "react";
import type { ChangeEvent, FormEvent } from "react";

type StateType = {
  productCode: string;
  productName: string;
  price: string; 
  quantity: number;
};

export default class ProductForm extends Component<Record<string, never>,StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      productCode: "",
      productName: "",
      price: "", 
      quantity: 1,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    } as Pick<StateType, keyof StateType>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Ép kiểu price sang number khi cần dùng
    const productData = {
      ...this.state,
      price: Number(this.state.price),
    };

    console.log(productData);

    // Reset form
    this.setState({
      productCode: "",
      productName: "",
      price: "",
      quantity: 1,
    });
  };

  render() {
    const styles = {
      container: {
        maxWidth: "400px",
        margin: "40px auto",
        padding: "25px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#1e1e1e",
        boxSizing: "border-box" as const,
      },
      title: {
        textAlign: "center" as const,
        marginBottom: "20px",
        fontWeight: "bold",
        color: "white",
      },
      group: {
        marginBottom: "15px",
      },
      label: {
        display: "block",
        marginBottom: "6px",
        fontSize: "14px",
        color: "white",
      },
      input: {
        width: "100%",
        padding: "10px 12px",
        borderRadius: "4px",
        border: "1px solid #666",
        boxSizing: "border-box" as const,
        backgroundColor: "#2e2e2e",
        color: "white",
      },
      button: {
        width: "100%",
        padding: "12px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
      },
    };

    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Thêm mới sản phẩm</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={styles.group}>
            <label style={styles.label}>Mã sản phẩm</label>
            <input
              type="text"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Tên sản phẩm</label>
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Giá</label>
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Số lượng</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Đăng ký
          </button>
        </form>
      </div>
    );
  }
}