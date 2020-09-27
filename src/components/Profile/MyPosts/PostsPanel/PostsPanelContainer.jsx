import React from 'react';
import { addPostsActionCreator, addNewPostTextActionCreator, ADD_POST } from "../../../../redux/profileReducer"
import PostPanel from './PostsPanel';


const PostPanelContainer = (props) => {
    function addElements() {
        props.dispatch(addPostsActionCreator())
    }

    function updateText(text) {
        props.dispatch(addNewPostTextActionCreator(text))
    }

    return (
        <PostPanel updateText={updateText} addElements={addElements} />
    )
}


export default PostPanelContainer