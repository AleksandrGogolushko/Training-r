import React from 'react';
import { connect } from "react-redux"
import { getUserProfile } from "../../redux/profileReducer"
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirectComponent.jsx';
import { compose } from "redux"
import Preloader from '../Commen/Preloader/Preloader';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        this.props.getUserProfile(userId)
    }
    render() {

        return (
            this.props.profile ? <Profile {...this.props} profile={this.props.profile} /> : <Preloader/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileData.profile,
})

export default compose(connect(mapStateToProps, { getUserProfile }), withRouter, 
// withAuthRedirect
)(ProfileContainer)





