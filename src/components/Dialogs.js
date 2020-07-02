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

const dialogs = [
  {id: 1, author: 'Eva'},
  {id: 2, author: 'Oleg'},
  {id: 3, author: 'Ola'}
]

const messages = [
  {message: 'Hi'},
  {message: 'Bye'},
  {message: 'Good luck'}
]

const Dialogs = () => {
  return(
    <div className={style.dialogs_content}>
      <div className={style.dialogs}>
        <Dialog author={dialogs[0].author} id={dialogs[0].id}/>
        <Dialog author={dialogs[1].author} id={dialogs[1].id}/>
        <Dialog author={dialogs[2].author} id={dialogs[2].id}/>
      </div>
      <div className={style.messages}>
        <Message message={messages[0].message}/>
        <Message message={messages[1].message}/>
        <Message message={messages[2].message}/>
      </div>
    </div>
  )
}

export default Dialogs;