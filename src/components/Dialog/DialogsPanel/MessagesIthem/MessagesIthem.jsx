import React from 'react';
import style from "./MessagesItem.module.css"
import MessagesAuthor from './MessagesAuthor/MessagesAuthor';

const MessagesItem = (props) => {
    
    let dialogsElements = props.dialogsData.map((el,i) =>
     <MessagesAuthor key={el.id} author={el.name} id={el.id} className={style[el.className]} />
    )
    return (
        <div className={style.messagesItem}>
            {dialogsElements}
        </div>
    )
}

export default MessagesItem