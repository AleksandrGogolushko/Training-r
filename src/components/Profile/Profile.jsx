import React from 'react';
import style from "./Profile.module.css"
import ProfileCover from './ProfileCover/ProfileCover';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import PersonContainer from './Person/PersonContainer';

const Profile = (props) => {
debugger
  return (
    <div className={style.componentsContent}>
      <ProfileCover cover={props.profile.cover}/>
      <PersonContainer />
      <MyPostsContainer />
    </div>
  )
}

export default Profile


