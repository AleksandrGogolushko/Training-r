import React from 'react';
import style from "./Posts.module.css"

const Posts = (message) => {
    return (
        <div className={style.postItem}>
            <div className={style.postIcon}></div>
            <div className={style.postText}>
                <p>{message.text}</p>
            </div>
        </div>
    )
}

export default Posts