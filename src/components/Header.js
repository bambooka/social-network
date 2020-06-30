import React from "react";
import style from './../styles/Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg" alt="logo"/>
    </header>
  )
}

export default Header;