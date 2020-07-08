import React from 'react';
import styles from './../../styles/Friends.module.css'

const FriendItem = (props) => {
  return(
    <div className={styles.friendItem}>
      <img src={props.friends.img} alt='#'/>
      <h4>{props.friends.name}</h4>
    </div>
  )
};

export default FriendItem;