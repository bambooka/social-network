import React from "react";
import style from './../styles/Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return(
    <div className={style.dialogs_content}>
      <div className={style.dialogs}>
        <div className={style.dialogItem  + ' ' + style.active}>
          <NavLink to={'/dialogs/1'}>Mila</NavLink>
        </div>
        <div className={style.dialogItem}>
          <NavLink to={'/dialogs/2'}>Oleg</NavLink>
        </div>
        <div className={style.dialogItem}>
          <NavLink to={'/dialogs/3'}>Eva</NavLink>
        </div>
      </div>
      <div className={style.messages}>
        <div>You are cool</div>
        <div>You are sweet</div>
        <div>You are angry</div>
      </div>
    </div>
  )
}

export default Dialogs;