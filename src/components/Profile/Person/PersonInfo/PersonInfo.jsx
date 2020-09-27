import React from 'react';
import style from "./PersonInfo.module.css"
import Status from "./Status/Status"

const PersonInfo = (props) => {
  return (
    <div className={style.info}>
      <p className={style.fio}>{props.name}</p>
       <Status status={"Helloow"} />
      <ul className={style.personData}>
        <li>About me:<span> {props.aboutMe}</span></li>
        <li>Looking for a job: <ul className={style.lookingJob}>
          {props.lookingForAJob?<li>Status: {props.lookingForAJob ? <span>&#10003; </span> : <span>&#10007; </span>}</li>:"----"}
          {props.lookingForAJobDescription?<li>Description: <span>{props.lookingForAJobDescription}</span></li>:"----"}
          </ul></li>
        <li className={style.contacts}>Contacts: <ul>
          {props.contacts.facebook ? <li>Facebook: <span>{props.contacts.facebook}</span></li> : null}
          {props.contacts.website ? <li>Website: <span>{props.contacts.website}</span></li> : null}
          {props.contacts.vk ? <li>Vk: <span>{props.contacts.vk}</span> </li> : null}
          {props.contacts.twitter ? <li>Twitter: <span>{props.contacts.twitter}</span></li> : null}
          {props.contacts.instagram ? <li>Instagram: <span>{props.contacts.instagram}</span></li> : null}
          {props.contacts.youtube ? <li>Youtube: <span>{props.contacts.youtube}</span></li> : null}
          {props.contacts.github ? <li>Github: <span>{props.contacts.github}</span></li> : null}
          {props.contacts.mainLink ? <li>MainLink: <span>{props.contacts.mainLink}</span></li> : null}
        </ul>
        </li>
      </ul>
    </div>
  )
}

export default PersonInfo