import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import Start from './pages/Start';
import Expensetracker from './pages/Expensetracker';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/expensetracker" element={<Expensetracker/>}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
