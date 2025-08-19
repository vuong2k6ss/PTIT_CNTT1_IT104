
import { Routes, Route, Link } from 'react-router-dom';
import ListCourse from './components/PTIT_CNTT1_IT104_Session12_Bai1/ListCourse';
import Calculation from './components/PTIT_CNTT1_IT104_Session12_Bai2/Calculation';
import UserInfo from './components/PTIT_CNTT1_IT104_Session12_Bai3/UserInfo';
import ColorBox from './components/PTIT_CNTT1_IT104_Session12_Bai4/ColorBox';
import FormatName from './components/PTIT_CNTT1_IT104_Session12_Bai5/FormatName';
import AdminIndex from './components/PTIT_CNTT1_IT104_Session12_Bai6/AdminIndex';
import UserLayout from './components/PTIT_CNTT1_IT104_Session12_Bai7/UserLayout';
import Layout from './components/PTIT_CNTT1_IT104_Session12_Bai8/Layout';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/bai1">Bài 1</Link></li>
          <li><Link to="/bai2">Bài 2</Link></li>
          <li><Link to="/bai3">Bài 3</Link></li>
          <li><Link to="/bai4">Bài 4</Link></li>
          <li><Link to="/bai5">Bài 5</Link></li>
          <li><Link to="/bai6">Bài 6</Link></li>
          <li><Link to="/bai7">Bài 7</Link></li>
          <li><Link to="/bai8">Bài 8</Link></li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/bai1" element={<ListCourse />} />
        <Route path="/bai2" element={<Calculation />} />
        <Route path="/bai3" element={<UserInfo />} />
        <Route path="/bai4" element={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ColorBox color="red" />
              <ColorBox color="blue" />
              <ColorBox color="green" />
          </div>}/>
        <Route path="/bai5" element={<FormatName />} />
        <Route path="/bai6" element={<AdminIndex />} />
        <Route path="/bai7" element={<UserLayout />} />
        <Route path="/bai8" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;

