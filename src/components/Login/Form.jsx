import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
const Form = () => {

    const [isErrorLogin, setIsErrorLogin] = useState(false);

    const { handleSubmit, reset, register } = useForm();

    const navigate = useNavigate()
    
    const submit = (data) => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login";
    axios
        .post(URL, data)
        .then(res => {
            localStorage.setItem("token", res.data.data.token)
            navigate('/')
        })
        .catch((err) => {
        localStorage.setItem("token", "");
        setIsErrorLogin(true);
        setTimeout(() => {
            setIsErrorLogin(false);
        }, 2000);
        });
        reset({
            email: '',
            password: ''
        })
    };

    const createAccount = () => {
      navigate('/createAccount')
    }

  return (
    <form onSubmit={handleSubmit(submit)} className="login__form">
      <ul className="login__test">
        <li className="flex-login">
          <b className="login-b">Email: </b>mason@gmail.com
        </li>
        <li className="flex-login">
          <b className="login-b">Password: </b>mason1234
        </li>
      </ul>
      <h2 className="login__title">Enter your information</h2>
      <ul className="login__list">
        <li className="login__item">
          <label htmlFor="login-email" className="login__label">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="login-email"
            className="login__input"
            placeholder="Email..."
          />
        </li>
        <li className="login__item">
          <label htmlFor="login-pass" className="login__label">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="login-pass"
            className="login__input"
            placeholder="Password"
          />
        </li>
      </ul>{
        isErrorLogin && <div className="login-err">Invalid credentials, try again...</div>
      }
      <button className="filter-form__btn logged">Login</button>
      <p className="login-p">Don't have an account? <span onClick={createAccount}> Sing up</span></p>
    </form>
  );
};

export default Form;
