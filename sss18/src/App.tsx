import Increase from "./components/PTIT_CNTT1_IT104_Session18_Bai1/Increase";
import UserList from "./components/PTIT_CNTT1_IT104_Session18_Bai2/UserList";
import LoginForm from "./components/PTIT_CNTT1_IT104_Session18_Bai3/LoginForm";
import ColorPicker from "./components/PTIT_CNTT1_IT104_Session18_Bai4/ColorPicker";
import InputText from "./components/PTIT_CNTT1_IT104_Session18_Bai5/InputText";
import InputRadio from "./components/PTIT_CNTT1_IT104_Session18_Bai6/InputRadio";
import TodoApp from "./components/PTIT_CNTT1_IT104_Session18_Bai7+Bai8/TodoApp";

export default function App() {
  return (
    <div>
      <Increase />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <UserList />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <LoginForm />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <ColorPicker />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <InputText />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <InputRadio />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <TodoApp />
    </div>
  );
}