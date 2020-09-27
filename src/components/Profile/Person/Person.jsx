import React from 'react';
import style from "./Person.module.css"
import PersonInfo from './PersonInfo/PersonInfo';
import avatar from "../../../assets/images/iconfinder_unknown_403017.svg"
const Person = (props)=>{
    return(
        <div className={style.person_info}>
        <img className={style.person_cover} src={props.profile.photos?props.profile.photos.large:avatar} alt="you"></img>
        <PersonInfo name={props.profile.fullName} contacts={props.profile.contacts} aboutMe={props.profile.aboutMe} lookingForAJob={props.profile.lookingForAJob} lookingForAJobDescription={props.profile.lookingForAJobDescription} />
      </div>
    )
}

export default Person