import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import './App.css';
import useToken from '../funcionalidades/App/useToken';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from '../paginas/Dashboard';
import Preferences from '../paginas/Preferences';
import Register from '../paginas/Register';
import Login from '../paginas/Login';
import Confirm from '../paginas/Confirm';
import RegisterSuccess from '../paginas/RegisterSuccess';
import Config from '../configs/config.json'

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return (
      <>
        <div className="wrapper">
          <a 
            className='putOnTop'
            href={Config.GitHub.url}
            target='_blank'
            rel='noopener noreferrer'>
            Go to GitHub repository
          </a>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login setToken={setToken} />} />
              <Route path="/login" element={<Login setToken={setToken} />} />
              <Route path="/register" element={<Register />} />
              <Route path='/default' element={<App />} />
              <Route path='/registerSuccess' element={<RegisterSuccess />} />
              <Route path='/confirm' element={<Confirm />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
      
    );
  }
  return (
    <div className="wrapper">
      <a href={Config.GitHub.url}>
        Go to GitHub repository
      </a>
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
