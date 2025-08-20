import "./App.css"
import Exercises01 from "./components/PTIT_CNTT1_IT104_Session13_Bai1/Exercises01"
import Exercise02 from "./components/PTIT_CNTT1_IT104_Session13_Bai2/Exercise02"
import Exercise03 from "./components/PTIT_CNTT1_IT104_Session13_Bai3/Exercise03"
import Parent_Comp from "./components/PTIT_CNTT1_IT104_Session13_Bai4/Parent_Comp"
import ParentComp from "./components/PTIT_CNTT1_IT104_Session13_Bai5/ParentComp"
import ListPost from "./components/PTIT_CNTT1_IT104_Session13_Bai6/ListPost"
import Apps from "./components/PTIT_CNTT1_IT104_Session13_Bai7/Apps"

function App() {

  return (
    <div className="app-container">
    <Exercises01 />
    <hr style={{border: "2px solid black", width: "100%"}}/>
    <Exercise02 />
    <hr style={{border: "2px solid black", width: "100%"}}/>
    <Exercise03 />
    <hr style={{border: "2px solid black", width: "100%"}}/>
    <Parent_Comp />
    <hr style={{border: "2px solid black", width: "100%"}}/>
    <ParentComp />
    <hr style={{border: "2px solid black", width: "100%"}}/>
    <ListPost />
    <hr style={{border: "2px solid black", width: "100%"}}/>
    <Apps />
    </div>
  )
}

export default App
