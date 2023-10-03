import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';


const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem 
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}        
        />
      ))}
    </ul>
  )
};
export default FriendList;
