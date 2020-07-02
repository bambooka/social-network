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
  {id: 3, author: 'Ola'},
  {id: 4, author: 'Max'}
]

const messages = [
  {message: 'Hi'},
  {message: 'Bye'},
  {message: 'Good luck'},
  {message: 'So so'},
]

const Dialogs = () => {
  return(
    <div className={style.dialogs_content}>
      <div className={style.dialogs}>
        {dialogs.map(dialog => {
          return <Dialog author={dialog.author} id={dialog.id}/>
        })}

      </div>
      <div className={style.messages}>
        {messages.map(message => {
          return <Message message={message.message}/>
        })}

      </div>
    </div>
  )
}

export default Dialogs;