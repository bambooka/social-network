import React from "react";
import style from './../styles/Profile.module.css'

const Profile = () => {
  return (
    <main className={style.profile}>
      <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt='profile wrapper' />
      <div>
        <img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" alt="avatar"/>
        <p>dfgd</p>
      </div>
      <div>
        my posts
        <div>
          new posts
        </div>
      </div>
    </main>
  )
}

export default Profile;