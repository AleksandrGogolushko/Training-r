import { usersAPI } from "../api/api";

const CHANGE_NEW_TEXT_POSTS = "CHANGE-NEW-TEXT-POSTS";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";


let initialState = {
    newTextPosts: "",
    postsData: [{ id: 1, text: "Hello everyone!" }, { id: 2, text: "Today I learn React" },],
    personData: [{ name: "Alexander G.", Birth: "2 september", City: "Lida", Education: "BNTU", Site: "Github" }],
    profile: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NEW_TEXT_POSTS:
            return {
                ...state,
                newTextPosts: action.text
            }
        case ADD_POST:
            let content = {
                id: state.postsData[state.postsData.length - 1].id + 1,
                text: state.newTextPosts
            }
            return {
                ...state,
                newTextPosts: "",
                postsData: [...state.postsData, content]
            }
        case SET_USER_PROFILE:
            debugger
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}

export const addPostsActionCreator = () => ({ type: ADD_POST })

export const addNewPostTextActionCreator = (text) => ({ type: CHANGE_NEW_TEXT_POSTS, text: text })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userID) => (dispatch) => {
    debugger
    usersAPI.getProfile(userID).then(response => {dispatch(setUserProfile(response.data)) });
}
export default profileReducer
