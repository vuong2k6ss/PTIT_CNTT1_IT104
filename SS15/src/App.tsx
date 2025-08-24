import './App.css'
import EmailForm from './Components/PTIT_CNTT1_IT104_Session15_Bai1/EmailForm'
import FormColor from './Components/PTIT_CNTT1_IT104_Session15_Bai2/FormColor'
import FormBirthday from './Components/PTIT_CNTT1_IT104_Session15_Bai3/FormBirthday'
import FormProgress from './Components/PTIT_CNTT1_IT104_Session15_Bai4/FormProgress'
import StudentPage from './Components/PTIT_CNTT1_IT104_Session15_Bai5/StudentPage'
import ListPost from './Components/PTIT_CNTT1_IT104_Session15_Bai6/ListPost'
import Clock from './Components/PTIT_CNTT1_IT104_Session15_Bai7/Clock'
import Counter from './Components/PTIT_CNTT1_IT104_Session15_Bai8/Counter'

function App() {


  return (
    <>
    <EmailForm />
    <hr style={{ width: "100%", border: "1px solid gray" }} />
    <FormColor />
    <hr style={{ width: "100%", border: "1px solid gray" }} />
    <FormBirthday />
    <hr style={{ width: "100%", border: "1px solid gray" }} />
    <FormProgress />
    <hr style={{ width: "100%", border: "1px solid gray" }} />
    <StudentPage />
    <hr style={{ width: "100%", border: "1px solid gray" }} /> 
    <ListPost />
    <hr style={{ width: "100%", border: "1px solid gray" }} /> 
    <Clock />
    <hr style={{ width: "100%", border: "1px solid gray" }} />
    <Counter />
    </>
  )
}

export default App
