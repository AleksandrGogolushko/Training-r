import React from 'react';
import style from "./PostsArea.module.css"
import Posts from './../Posts/Posts';

const PostsArea = (props) => {
    let showElements = props.postsData.map(el => <Posts text={el.text} key={el.id} />)
    
    return (
        <div className={style.postsArea}>
           {showElements}
        </div>
    )
}

export default PostsArea