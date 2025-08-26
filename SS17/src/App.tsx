import SetName from "./components/PTIT_CNTT1_IT104_Session17_Bai1/SetName";
import ProductInfo from "./components/PTIT_CNTT1_IT104_Session17_Bai2/ProductInfo";
import ChangeColor from "./components/PTIT_CNTT1_IT104_Session17_Bai3/ChangeColor";
import Toggle from "./components/PTIT_CNTT1_IT104_Session17_Bai4/Toggle";
import Form from "./components/PTIT_CNTT1_IT104_Session17_Bai5/Form";
import CountText from "./components/PTIT_CNTT1_IT104_Session17_Bai6/CountText";
import Select from "./components/PTIT_CNTT1_IT104_Session17_Bai7/Select";
import Checkbox from "./components/PTIT_CNTT1_IT104_Session17_Bai8/Checkbox";

function App() {
  return (
    <div>
      <SetName />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <ProductInfo />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <ChangeColor />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <Toggle />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <Form />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <CountText />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <Select />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <Checkbox />
    </div>
  );
}

export default App;