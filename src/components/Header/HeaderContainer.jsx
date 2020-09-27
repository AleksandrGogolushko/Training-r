import React from 'react';
import { connect } from "react-redux"
import { authorizeCheck } from "../../redux/authReducer"
import Header from './Header';
import {authAPI} from "../../api/api"

class HeaderContainer extends React.Component {
    componentDidMount() {
        // authAPI.checkAuth()
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let { id, login, email } = response.data.data;
        //             this.props.setAuthUserData(id, email, login)
        //         }
        //     });
        this.props.authorizeCheck()
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { authorizeCheck })(HeaderContainer)

