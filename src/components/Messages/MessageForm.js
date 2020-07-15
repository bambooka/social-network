import React from 'react';
import {addMessageActionCreator, inputMessageActionCreator} from "../../data/state";

let MessageForm = (props) => {

  let inputMessage = (e) => {
    let inputValue = e.target.value;
    let action = inputMessageActionCreator(inputValue);
    props.dispatch(action);
  }

  let sendNewMessage = (e) => {
    let inputValue = e.target.value;
    let action = addMessageActionCreator(inputValue);
    console.log(action)
    props.dispatch(action);
  }

  return (
    <div>
      <textarea onChange={inputMessage} defaultValue={props.currentMessage.text} />
      <button onClick={sendNewMessage}>send</button>
    </div>
  )
}

export default MessageForm;