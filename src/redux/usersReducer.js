import { usersAPI,followUnfollowAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS = "SET-TOTAL-USERS"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING = "TOGGLE-IS-FOLLOWING"


let initialState = {
    usersProfile: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersProfile: state.usersProfile.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersProfile: state.usersProfile.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            debugger
            return {
                ...state, usersProfile: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }

}


export const follow = (userID) => ({ type: FOLLOW, userID })

export const unfollow = (userID) => ({ type: UNFOLLOW, userID })

export const setUsers = (users, totalCount) => ({ type: SET_USERS, users, totalCount })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS, totalCount })

export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const setFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FETCHING, isFetching, userID })

export const getUsersThunk = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount))
    });
}

export const setPageAndGetUsers = (pageNumber, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setIsFetching(true))
    usersAPI.getUsers(pageNumber, pageSize).then(data => {
        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items))
    });
}

export const unfollowThunk = (id) => (dispatch) => {
    dispatch(setFollowingProgress(true, id));
    followUnfollowAPI.makeUnfollow(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollow(id))
        }
        dispatch(setFollowingProgress(false, id))
    });
}

export const followThunk = (id) => (dispatch) => {
    dispatch(setFollowingProgress(true, id));
    followUnfollowAPI.makeFollow(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(id))
        }
        dispatch(setFollowingProgress(false, id))
    });
}
export default usersReducer
