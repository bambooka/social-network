import React from "react";
import style from './../styles/Dialogs.module.css';
import Dialog from "../Dialogs/DialogItem";
import Message from "./Messages/MessageItem";

const Dialogs = (props) => {
  return(
    <div className={style.dialogs_content}>
      <div className={style.dialogs}>
        {props.dialogs.map(dialog => {
          return <Dialog author={dialog.author} id={dialog.id}/>
        })}

      </div>
      <div className={style.messages}>
        {props.messages.map(message => {
          return <Message message={message.message}/>
        })}

      </div>
    </div>
  )
};

export default Dialogs;