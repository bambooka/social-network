import React from "react";
import style from './../../styles/PostForm.module.css'

const PostForm = (props) => {
  let refer = React.createRef();

  let addPost = () => {
    let inputValue = refer.current.value;
    props.dispatch({type: 'ADD_POST', inputValue: inputValue})
    refer.current.value = '';
  }

  let inputMessage = () => {
    let inputValue = refer.current.value;
    props.dispatch({type: 'INPUT_MESSAGE', inputValue: inputValue})
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