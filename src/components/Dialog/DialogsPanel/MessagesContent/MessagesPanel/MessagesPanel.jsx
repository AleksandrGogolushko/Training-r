import React from 'react';
import style from "./MessagesPanel.module.css";

const MessagesPanel = (props) => {
    
    let textarea = React.createRef()

    function add() {
        props.addElements()
        textarea.current.value = ''
    }

    function updateTextContent(e) {
        let text = e.target.value
        props.updateText(text)
    }
    
    return (
        <div className={style.messagesPanel}>
            <textarea onChange={updateTextContent} ref={textarea} value={props.textValue} name="postsArea" className={style.postsArea} placeholder="You messages..."></textarea>
            <button className={style.sendButton} onClick={add}>Send</button>
        </div>
    )
}

export default MessagesPanel