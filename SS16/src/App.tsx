import './App.css'
import SubjectList from './components/PTIT_CNTT1_IT104_Session16_Bai1/SubjectList'
import LoginStatus from './components/PTIT_CNTT1_IT104_Session16_Bai2/LoginStatus'
import ButtonGroup from './components/PTIT_CNTT1_IT104_Session16_Bai3/ButtonGroup'
import ClickCounter from './components/PTIT_CNTT1_IT104_Session16_Bai4/ClickCounter'
import UserForm from './components/PTIT_CNTT1_IT104_Session16_Bai5/UserForm'
import ThemeSwitcher from './components/PTIT_CNTT1_IT104_Session16_Bai6/ThemeSwitcher'
import Home from './components/PTIT_CNTT1_IT104_Session16_Bai7+8/Home'

function App() {
  return (
    <>
    <SubjectList />
    <hr style={{ width: "100%", border: "1px solid gray" }} />
    <LoginStatus />
    <hr style={{ width: "100%", border: "1px solid gray" }} />
    <ButtonGroup />
    <hr style={{ width: "100%", border: "1px solid gray" }} />
    <ClickCounter />
    <hr style={{ width: "100%", border: "1px solid gray" }} />
    <UserForm />
    <hr style={{ width: "100%", border: "1px solid gray" }} />
    <ThemeSwitcher />
    <hr style={{ width: "100%", border: "1px solid gray" }} />
    <br />
    <Home />
    </>
  )
}

export default App
