import React from 'react';
import style from "./MyPosts.module.css"
import PostsArea from './PostsArea/PostsArea';
import PostPanel from './PostsPanel/PostsPanel';

const MyPosts = (props) => {
    return (
        <div className={style.postSection}>
            <p className={style.title}>My posts</p>
            <PostPanel updateText={props.updateText} addPosts={props.addPosts} />
            <PostsArea postsData={props.profileData.postsData} />
        </div>
    )
}

export default MyPosts