import React from 'react';
import PostItem from "./PostItem";
import style from './../../styles/PostList.module.css'

const posts = [
  {
    id: 1,
    img: 'https://us.123rf.com/450wm/irinalevitskaya/irinalevitskaya1802/irinalevitskaya180200102/96364553-wow-pop-art-face-sexy-surprised-woman-with-blonde-curly-hair-and-open-mouth-holding-binoculars-in-he.jpg?ver=6',
    text: 'It is my first post'
  },
  {
    id: 2,
    img: 'https://thumbs.dreamstime.com/b/print-146697723.jpg',
    text: 'It is my second post'
  },
  {
    id: 3,
    img: 'https://image.freepik.com/free-vector/_1441-271.jpg',
    text: 'It is my third post'
  },

]

const PostList = () => {
  return (
    <div className={style.list}>
      {posts.map(post => {
        return <PostItem img={post.img} text={post.text}/>
      })}
    </div>
  )

}

export default PostList;