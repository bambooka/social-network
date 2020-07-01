import React from "react";
import style from './../styles/Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <NavLink activeClassName={style.activeLink} to='/dialogs'>Dialogs</NavLink>
      <NavLink activeClassName={style.activeLink} to='/profile'>Profile</NavLink>
    </nav>
  )
}

export default Navigation;