import { useState } from 'react';

export default function useLogin() {

  const [login, setLogin] = useState(false);

  const saveLogin = (value) => {
    setLogin(value);
  };

  return {
    setLogin: saveLogin,
    login
  }
}