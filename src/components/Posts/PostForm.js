import React from "react";
import style from './../../styles/PostForm.module.css'

const PostForm = () => {
  return (
    <div className={style.form}>
      <textarea />
      <button>Add post</button>
    </div>
  )
}

export default PostForm;