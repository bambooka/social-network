import React from "react";
import style from './../styles/Profile.module.css'
import PostForm from "./Posts/PostForm";
import PostList from "./Posts/PostList";

const Profile = () => {
  return (
    <main className={style.profile}>
      <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt='profile wrapper' />
      <PostForm />
      <PostList />
    </main>
  )
}

export default Profile;