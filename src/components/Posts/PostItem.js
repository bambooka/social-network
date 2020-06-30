import React from 'react';
import style from './../../styles/PostItem.module.css'

const PostItem = () => {
  return (
    <>
      <img className={style.logo} src='https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg' alt='avatar' />
      <p>post text</p>
      </>
  )

}

export default PostItem;