

import Main from './components/header/main';
import './App.css'
import Login from './components/Pages/Login';
import './index.css'

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Main/>} />
    </Routes>
  );
}

export default App;
