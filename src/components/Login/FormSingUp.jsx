import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const FormSingUp = () => {

    const {handleSubmit, reset, register} = useForm()
    const [newUser, setNewUser] = useState()
    const [isCreateUser, setIsCreateUser] = useState(false)

    const objDefault = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      role: ""
    }

    const submit = data => {
        setNewUser(data)
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
        axios.post(URL, newUser)
            .then(res => {
                console.log(res.data)
                setIsCreateUser(true)
                setTimeout(() => {
                    setIsCreateUser(false)
                }, 1000);
            })
            .catch(err => console.log(err.data))
        reset(objDefault)
    }

  return (
    <div className='sing-form'>
        <form className='sing-form__container' onSubmit={handleSubmit(submit)}>
        <h2 className='sing-form__title'>Create Account</h2>
            <div className='sing-form__info'>
                <label htmlFor="firstName" className='sing-form__label'>First Name </label>
                <input type="text" id='firstName' placeholder=' ' className='sing-form__input' {...register('firstName')} />
            </div>
            <div className='sing-form__info'>
                <label htmlFor="lastName" className='sing-form__label'>Last Name </label>
                <input type="text" id='lastName' placeholder=' '  className='sing-form__input'{...register('lastName')} />
            </div>
            <div className='sing-form__info'>
                <label htmlFor="email" className='sing-form__label'>Email </label>
                <input type="email" id='email' placeholder=' ' className='sing-form__input' {...register('email')} />
            </div>
            <div className='sing-form__info'>
                <label htmlFor="password" className='sing-form__label'>Password </label>
                <input type="password" id='password' className='sing-form__input' {...register('password')} />
            </div>
            <div className='sing-form__info'>
                <label htmlFor="phone" className='sing-form__label'>Phone </label>
                <input type="number" id='phone' placeholder=' ' className='sing-form__input' {...register('phone')} />
            </div>
            <div className='sing-form__info'>
                <label htmlFor="role" className='sing-form__label'>Role </label>
                <input type="text" id='role' placeholder=' ' className='sing-form__input' {...register('role')} />
            </div>
            <button className='filter-form__btn logged'>Create</button>
            {
                isCreateUser && <div className="createExito">Your account was successfully created</div>
            }
        </form>
    </div>
  )
}

export default FormSingUp