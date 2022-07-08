import React, { useEffect, useState } from "react";
import Form from './Form'
import UserLogged from "./UserLogged";
import './style/loginScreen.css'

const LoginScreen = () => {

  const [token, setToken] = useState('')

  const changeToken = localStorage.getItem('token')

  useEffect(() => {
    setToken(changeToken)
  },[changeToken])

  return (
    <div className="login">
      {
        token ?
        <UserLogged />
        :
        <Form />
        }
    </div>
  );
};

export default LoginScreen;
