import React from 'react';
import style from "./MessagesAuthor.module.css"
import { NavLink } from 'react-router-dom';

const MessagesAuthor = (props) => {
    return (
        <div className={`${style.messagesAuthor} ${props.className}`}>
            <div className={style.avatarAuthor}></div>
            <NavLink to={`/dialog/${props.id}`}>
                <p className={style.author}>{props.author}</p>
            </NavLink>
        </div>
    )
}

export default MessagesAuthor