import React from "react";
import style from './../../styles/PostForm.module.css'
import {addPostActionCreator, inputPostActionCreator} from "../../data/state";

const PostForm = (props) => {
  let refer = React.createRef();

  let addPost = () => {
    let inputValue = refer.current.value;
    let action = addPostActionCreator(inputValue);
    props.dispatch(action)
    refer.current.value = '';
  }

  let inputMessage = () => {
    let inputValue = refer.current.value;
    let action = inputPostActionCreator(inputValue);
    props.dispatch(action)
  }

  return (
    <div className={style.form}>
      <textarea onChange={inputMessage} ref={refer}>{props.currentInput}</textarea>
      <br />
      <button onClick={addPost}>Add post</button>
    </div>
  )
};

export default PostForm;