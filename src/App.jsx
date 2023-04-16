import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import Start from './pages/Start';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
