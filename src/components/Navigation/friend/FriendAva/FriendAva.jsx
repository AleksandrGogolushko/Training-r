import React from 'react';
import style from "./FriendAva.module.css"


const FriendAva = (props) => {
  return (
          <div className={style.friendAva}>
            <p className={style.friendName}>{props.friendName}</p>
          </div>
  )
}

export default FriendAva