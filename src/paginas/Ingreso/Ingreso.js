import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Ingreso.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';


export default function Ingreso({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loginIsShown, setLoginIsShown] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginIsShown) navigate('/login', { setToken, setLoginIsShown } );
    else navigate('/register', { setLoginIsShown }  )
  }, [])
  return(<></>);
}

Ingreso.propTypes = {
  setToken: PropTypes.func.isRequired
};