import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Read from './pages/Read'
import Create from './pages/Create';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Read />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
