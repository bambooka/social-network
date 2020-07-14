import React from 'react';
import {inputMessageActionCreator} from "../../data/state";

let MessageForm = (props) => {

  let inputPostRef = React.createRef('inputPostRef');

  let inputMessage = () => {
    let inputValue = inputPostRef.current.value;
    let action = inputMessageActionCreator(inputValue);
    props.dispatch(action);
  }

  return (
    <div>
      <textarea onChange={inputMessage} ref={inputPostRef}>
        {props.currentMessage.text}
      </textarea> <br/>
      <button>send</button>
    </div>
  )
}

export default MessageForm;