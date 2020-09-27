import { addPostsActionCreator, addNewPostTextActionCreator } from "../../../redux/profileReducer"
import MyPosts from './MyPosts';
import { connect } from "react-redux"


let mapStateToProps = (state) => {
    return {
        profileData: state.profileData,
        profile:state.profileData.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => { dispatch(addNewPostTextActionCreator(text)) },
        addPosts: () => { dispatch(addPostsActionCreator()) }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
