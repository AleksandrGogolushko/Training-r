import React from 'react';
import style from "./Navigation.module.css"
import { NavLink } from 'react-router-dom';
import FriendContainer from './friend/FriendContainer';

const Nav = () => {
  
  return (
    <nav>
      <ul>
        <li className={style.active}>
          <NavLink to="/Profile" activeClassName={style.active}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/Dialog" activeClassName={style.active}>Messages</NavLink>
        </li> 
        <li><NavLink to="/News" activeClassName={style.active}>News</NavLink></li>
        <li><NavLink to="/Music" activeClassName={style.active}>Music</NavLink></li>
        <li><NavLink to="/Users" activeClassName={style.active}>Users</NavLink></li>
      </ul>
      <p><NavLink to="/Settings" activeClassName={style.active}>Settings</NavLink></p>
      <FriendContainer/>
    </nav>
  )
}

export default Nav