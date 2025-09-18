import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPost from './components/ListPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list-post" element={<ListPost />} />
      </Routes>
    </Router>
  );
}

export default App;
