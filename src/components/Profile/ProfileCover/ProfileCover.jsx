import React from 'react';
import style from "./ProfileCover.module.css"
import cover from "../../../assets/images/wyrd6q.jpg"
const Profile_cover = (props)=>{
    return(
        <div className={style.profile_cover}>
            <img src={props.cover?props.cover:cover}/>
        </div>
    )
}

export default Profile_cover