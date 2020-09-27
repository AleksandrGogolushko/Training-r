import React from 'react';
import style from "./DialogsPanel.module.css"
import MessagesContentContainer from './MessagesContent/MessagesContentContainer';
import MessagesItemContainer from './MessagesIthem/MessagesIthemContainer';

const DialogsPanel = () => {
    
    return (
        <div className={style.dialogsPanel}>
            <MessagesItemContainer />
            <MessagesContentContainer />
        </div>
    )
}

export default DialogsPanel
