import { useAppDispatch, useAppSelector } from "../hooks/useCustomeRedux";
import { toggleMenu } from "../redux/slices/menu.slice";

// import icon từ ant design
import {
  DashboardOutlined,
  UserOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
} from "@ant-design/icons";

export default function Menu() {
  const collapsed = useAppSelector((state) => state.menu.collapsed);
  const dispatch = useAppDispatch();

  const menuItems = [
    { icon: <DashboardOutlined />, label: "Bảng điều khiển" },
    { icon: <UserOutlined />, label: "Tài khoản" },
    { icon: <AppstoreOutlined />, label: "Tài sản" },
    { icon: <BarChartOutlined />, label: "Thống kê" },
    { icon: <FileTextOutlined />, label: "Tài liệu" },
    { icon: <LeftOutlined />, label: "Thu gọn" },
  ];

  return (
    <div
      style={{
        width: collapsed ? "60px" : "200px",
        backgroundColor: "#001f3f",
        color: "#fff",
        height: "100vh",
        transition: "all 0.3s",
        paddingTop: "20px",
      }}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={index === menuItems.length - 1 ? () => dispatch(toggleMenu()) : undefined}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
            cursor: index === menuItems.length - 1 ? "pointer" : "default",
          }}
        >
          <span style={{ fontSize: "18px", marginRight: collapsed ? 0 : "10px" }}>
            {item.icon}
          </span>
          {!collapsed && <span>{item.label}</span>}
        </div>
      ))}
    </div>
  );
}
