import React from 'react';
import PostItem from "./PostItem";
import style from './../../styles/PostList.module.css'

const posts = [
  {
    id: 1,
    img: 'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/29494/42220/1516682731198_PSX_20180122_175847-1194x1201__37842.1521002898.jpg?c=2&imbypass=on',
    text: 'It is my first post'
  },
  {
    id: 2,
    img: 'https://www.artincoaching.co.uk/wp-content/uploads/2019/02/girl-2696947__340.jpg',
    text: 'It is my second post'
  },
  {
    id: 3,
    img: 'https://www.artnhobby.ie/media/tmp/resized/studioforty9/slider/2020_04_09_14_30_68b80e28eabb1636cd82ff82870ffc71-770-770.png',
    text: 'It is my third post'
  },

]

const PostList = () => {
  return (
    <div className={style.list}>
      <PostItem img={posts[0].img} text={posts[0].text}/>
      <PostItem img={posts[1].img} text={posts[1].text}/>
      <PostItem img={posts[2].img} text={posts[2].text}/>
    </div>
  )

}

export default PostList;