import React from 'react';
import { connect } from "react-redux"
import { follow, unfollow, setCurrentPage, setFollowingProgress, getUsersThunk, setPageAndGetUsers, unfollowThunk, followThunk } from "../../redux/usersReducer"
import Users from './Users';
import Preloader from '../Commen/Preloader/Preloader';
import { compose } from "redux"
import { withAuthRedirect } from '../../hoc/AuthRedirectComponent';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }
    changePage = (pageNumber) => {
        this.props.setPageAndGetUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changePage={this.changePage}
                usersProfile={this.props.usersProfile}
                isFetching={this.props.isFetching}
                setFollowingProgress={this.props.setFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                unfollowThunk={this.props.unfollowThunk}
                followThunk={this.props.followThunk}
            />
        </>

    }
}


let mapStateToProps = (state) => {
    return {
        usersProfile: state.usersData.usersProfile,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
        followingInProgress: state.usersData.followingInProgress
    }
}

export default compose(connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        setFollowingProgress, getUsersThunk, setPageAndGetUsers,
        unfollowThunk, followThunk
    }), withAuthRedirect)(UsersAPIComponent)