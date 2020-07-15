import React from 'react';
import {inputMessageActionCreator} from "../../data/state";

let MessageForm = (props) => {

  let inputMessage = (e) => {
    let inputValue = e.target.value;
    let action = inputMessageActionCreator(inputValue);
    props.dispatch(action);
  }

  return (
    <div>
      <textarea onChange={inputMessage}>
        {props.currentMessage.text}
      </textarea> <br/>
      <button>send</button>
    </div>
  )
}

export default MessageForm;