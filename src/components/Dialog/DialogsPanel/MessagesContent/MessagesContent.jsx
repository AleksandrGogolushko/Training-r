import React from 'react';
import style from "./MessagesContent.module.css"
import MessagesArea from './MessagesArea/MessagesArea';
import MessagesPanel from './MessagesPanel/MessagesPanel';

const MessagesContent = (props) => {
    return (
        <div className={style.messagesContent}>
            <MessagesArea messagesData={props.dataDialog.messagesData} />
            <MessagesPanel updateText={props.updateText} addElements={props.addElements} />
        </div>
    )
}

export default MessagesContent




