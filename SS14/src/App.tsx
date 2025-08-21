import "./App.css";
import Exersice01 from "./components/PTIT_CNTT1_IT104_Session14_Bai1/Exersice01";
import Notification from "./components/PTIT_CNTT1_IT104_Session14_Bai2/Notification";
import Company from "./components/PTIT_CNTT1_IT104_Session14_Bai3/Company";
import Slogan from "./components/PTIT_CNTT1_IT104_Session14_Bai4/Slogan";
import ProductForm from "./components/PTIT_CNTT1_IT104_Session14_Bai5/ProductForm";
import GenderForm from "./components/PTIT_CNTT1_IT104_Session14_Bai6/GenderForm";
import RegisterForm from "./components/PTIT_CNTT1_IT104_Session14_Bai7/RegisterForm";
import LoginForm from "./components/PTIT_CNTT1_IT104_Session14_Bai8/LoginForm";

function App() {
  return (
    <div>
      <Exersice01 />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <Notification />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <Company />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <Slogan />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <ProductForm />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <GenderForm />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <RegisterForm />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <LoginForm />
    </div>
  );
}

export default App;