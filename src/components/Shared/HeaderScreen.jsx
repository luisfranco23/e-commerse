import React, { useRef, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import './headerScreen.css'

const HeaderScreen = () => {

    const navbar = useRef()
    const [isBoolean, setIsBoolean] = useState(true)

    const clickMenuHan = () =>{
        navbar.current.classList.toggle('navbar-open')
    }

  return (
    <header className="header">
      <h1 className="header__title">
        <Link to='/'>e-commerce</Link>
      </h1>
      <div onClick={clickMenuHan} className="menuhan">
        <i className='bx bx-menu'></i>
      </div>
      <nav ref={navbar} className="navbar">
        <ul className="navbar__list">
          <li onClick={clickMenuHan} className="navbar__items">
            <NavLink to="/login" className={({isActive}) => isActive ? 'navbar__link navbar__link-active' : 'navbar__link'}>   
                <i className="bx bxs-user-circle"></i>
                <p className="navbar__text">Login</p>
            <p></p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink to="/purchases" onClick={clickMenuHan} className={({isActive}) => isActive ? 'navbar__link navbar__link-active' : 'navbar__link'}>
            <i className='bx bxs-store-alt'></i>
            <p className="navbar__text">Purchases</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink to="/cart" onClick={clickMenuHan} className={({isActive}) => isActive ? 'navbar__link navbar__link-active' : 'navbar__link'}>
                <i className='bx bxs-cart'></i>
                <p className="navbar__text">Cart</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderScreen;
