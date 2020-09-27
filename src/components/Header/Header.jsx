import React from 'react';
import style from './Header.module.css';
import logo from "../../assets/images/logo192.png"
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <header>
      <img className={style.logo} src={logo} alt="logo"></img>
      <div className={style.loginBlock}>
        {props.isAuth ? <span>{props.login}</span> : <NavLink to={'/login'}>Sign in</NavLink>}
      </div>
    </header>
  )
}

export default Header