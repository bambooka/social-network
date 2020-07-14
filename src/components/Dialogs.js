import React from "react";
import style from './../styles/Dialogs.module.css';
import Dialog from "../Dialogs/DialogItem";
import Message from "./Messages/MessageItem";
import MessageForm from "./Messages/MessageForm";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs_content}>
      <div className={style.dialogs}>
        {props.dialogs.map((dialog, index) => {
          return <Dialog key={index} author={dialog.author} id={dialog.id}/>
        })}

      </div>
      <div className={style.messages}>
        <div className={style.messages}>
          {props.messages.map((message, index) => {
            return <Message key={index} message={message.message}/>
          })}
        </div>
        <MessageForm />
      </div>
    </div>
  )
};

export default Dialogs;