import ShoppingCart from "./components/PTIT_CNTT1_IT104_Session19_Bai1/ShoppingCart";
import ThemeApp from "./components/PTIT_CNTT1_IT104_Session19_Bai2/ThemeApp";
import RenderCounter from "./components/PTIT_CNTT1_IT104_Session19_Bai3/RenderCounter";
import RegisterForm from "./components/PTIT_CNTT1_IT104_Session19_Bai4/RegisterForm";
import RandomQuote from "./components/PTIT_CNTT1_IT104_Session19_Bai5/RandomQuote";
import KeyTracker from "./components/PTIT_CNTT1_IT104_Session19_Bai6/KeyTracker";
import ScrollToSection from "./components/PTIT_CNTT1_IT104_Session19_Bai7/ScrollToSection";
import LoginForm from "./components/PTIT_CNTT1_IT104_Session19_Bai8/LoginForm";

function App() {
  return (
    <div>
      <ShoppingCart />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <ThemeApp />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <RenderCounter />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <RegisterForm />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <RandomQuote />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <KeyTracker />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <ScrollToSection />
      <hr style={{ width: "100%", border: "1px solid gray" }} />
      <LoginForm />
    </div>
  );
}

export default App;