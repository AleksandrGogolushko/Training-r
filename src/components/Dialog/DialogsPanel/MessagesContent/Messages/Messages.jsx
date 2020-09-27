import React from 'react';
import style from "./Messages.module.css"

const Messages = (props) => {
    const nameClass = `${style.messagesText} ${props.mainAuthor?style.mainAuthor:style.interlocutor}`;
    return (
        <div className={nameClass}>
            <p>{props.author}: <span>{props.messages}</span></p>
        </div>

    )
}

export default Messages