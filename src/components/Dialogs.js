import React from "react";
import style from './../styles/Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={style.dialogItem}>
      <NavLink to={path}>{props.author}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div>{props.message}</div>
  )
}

const Dialogs = () => {
  return(
    <div className={style.dialogs_content}>
      <div className={style.dialogs}>
        <Dialog author="Eva" id="1"/>
        <Dialog author="Ola" id="2"/>
        <Dialog author="Oleg" id="3"/>
      </div>
      <div className={style.messages}>
        <Message message='Hi!'/>
        <Message message='Bye!'/>
        <Message message='Good luck'/>
      </div>
    </div>
  )
}

export default Dialogs;