import React from "react";
import style from './../styles/Navigation.module.css'
import {NavLink} from "react-router-dom";
import FriendList from './Friends/FriendsList';

const Navigation = (props) => {
  return (
    <nav className={style.nav}>
      <NavLink activeClassName={style.activeLink} to='/dialogs'>Dialogs</NavLink>
      <NavLink activeClassName={style.activeLink} to='/profile'>Profile</NavLink>
      <FriendList friends={props.friends} />
    </nav>
  )
};

export default Navigation;