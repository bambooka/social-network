import React from 'react';
import PostItem from "./PostItem";
import style from './../../styles/PostList.module.css'

const PostList = (props) => {
  return (
    <div className={style.list}>
      {props.posts.map((post, index) => {
        return <PostItem key={index} img={post.img} text={post.text}/>
      })}
    </div>
  )

};

export default PostList;