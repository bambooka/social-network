import React from "react";
import style from './../../styles/PostForm.module.css'

const PostForm = (props) => {
  let refer = React.createRef();

  let addPost = () => {
    let inputValue = refer.current.value;
    props.addPost(inputValue);
  }

  return (
    <div className={style.form}>
      <textarea ref={refer}/>
      <br />
      <button onClick={addPost}>Add post</button>
    </div>
  )
};

export default PostForm;