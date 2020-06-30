import React from "react";
import style from './../styles/Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a href="#">
            Profile
          </a>
        </li>
        <li>
          <a href="#">
            Messages
          </a>
        </li>
        <li>
          <a href="#">
            News
          </a>
        </li>
        <li>
          <a href="#">
            Music
          </a>
        </li>
        <li>
          <a href="#">
            Settings
          </a>
        </li>

      </ul>
    </nav>
  )
}

export default Navigation;