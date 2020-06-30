import React from 'react';
import PostItem from "./PostItem";
import style from './../../styles/PostList.module.css'

const PostList = () => {
  return (
    <div className={style.list}>
      <PostItem/>
    </div>
  )

}

export default PostList;