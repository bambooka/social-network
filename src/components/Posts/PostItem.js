import React from 'react';
import style from './../../styles/PostItem.module.css'

const PostItem = (props) => {
  return (
    <>
      <img className={style.logo} src={props.img} alt='avatar' />
      <p>{props.text}</p>
      </>
  )

}

export default PostItem;