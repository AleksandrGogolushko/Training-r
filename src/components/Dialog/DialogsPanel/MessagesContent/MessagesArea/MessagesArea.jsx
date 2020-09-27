import React from 'react';
import style from "./MessagesArea.module.css"
import Messages from "../Messages/Messages"

const MessagesArea = (props) => {
    let showElements = props.messagesData.map(el => <Messages key={el.id} author={el.author} messages={el.messages} mainAuthor={el.mainAuthor} />)
    return (
        <div className={style.MessagesArea}>
            {showElements}
        </div>
    )
}

export default MessagesArea