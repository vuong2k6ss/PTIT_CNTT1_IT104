import './App.css'
import ListProduct from './components/ListProduct'
import ListStudent from "./components/ListStudent"
import FindStudentById from "./components/FindStudentById"
import CreateStudent from "./components/CreateStudent"
import StudentMana from "./components/StudentManagement"
function App() {

  return (
    <>
      <ListProduct/>
      <ListStudent/>
      <FindStudentById/>
      <CreateStudent/>
      <StudentMana/>
    </>
  )
}

export default App