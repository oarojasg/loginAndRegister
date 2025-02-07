import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import './App.css';
import useToken from '../funcionalidades/App/useToken';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Ingreso from '../paginas/Ingreso/Ingreso';
import Dashboard from '../paginas/Dashboard/Dashboard';
import Preferences from '../paginas/Preferences/Preferences';
import Register from '../paginas/Register/Register';
import Login from '../paginas/Login/Login';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ingreso />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path='/default' element={<App />} />
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
