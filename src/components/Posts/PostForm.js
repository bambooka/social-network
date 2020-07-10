import React from "react";
import style from './../../styles/PostForm.module.css'

const PostForm = (props) => {
  let refer = React.createRef();

  let addPost = () => {
    let inputValue = refer.current.value;
    props.addPost(inputValue);
    refer.current.value = '';
  }

  let inputMessage = () => {
    let inputValue = refer.current.value;
    props.inputMessage(inputValue)
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