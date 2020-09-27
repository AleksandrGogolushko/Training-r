import React from 'react';
import style from "./PostsPanel.module.css";

const PostPanel = (props) => {
    let textarea = React.createRef()

    function add() {
        props.addPosts()
        textarea.current.value = ''
    }

    function updateTextContent(e) {
        let text = e.target.value
        props.updateText(text)
    }

    return (
        <div className={style.postPanel}>
            <textarea onChange={updateTextContent} ref={textarea} value={props.textValue} name="postsArea" className={style.postsArea} placeholder="You news..."></textarea>
            <button className={style.sendButton} onClick={add}>Add posts</button>
        </div>
    )
}

export default PostPanel