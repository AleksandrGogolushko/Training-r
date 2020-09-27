import React from 'react';
import { withAuthRedirect } from '../../hoc/AuthRedirectComponent';
import Dialog from "../Dialog/Dialog"


let DialogsContainer = (props) => {
    return <Dialog {...props} />
}

let AuthRedirectComponent = withAuthRedirect(DialogsContainer) /// для редиректа если не авторизированн


export default AuthRedirectComponent

