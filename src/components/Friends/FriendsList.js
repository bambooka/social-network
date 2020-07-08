import React from 'react';
import FriendItem from './FriendItem';
import styles from './../../styles/Friends.module.css'

const FriendList = (props) => {
  return(
    <div className={styles.friendList}>
      {props.friends.map((friend) => (
        <FriendItem friends={friend}/>
      ))}
    </div>
  )
};

export default FriendList;