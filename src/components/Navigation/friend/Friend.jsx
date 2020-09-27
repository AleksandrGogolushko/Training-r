import React from 'react';
import style from "./Friend.module.css"
import FriendAva from './FriendAva/FriendAva';


const Friend = (props) => {
    let friends = props.friend.map(el =><FriendAva key={el.name} friendName={el.name}/>)
  return (
      <div className={style.friend}>
        <p className={style.title}>Friends</p>
        <div className={style.friendSection}>
          {friends}
        </div>
      </div>
  )
}

export default Friend