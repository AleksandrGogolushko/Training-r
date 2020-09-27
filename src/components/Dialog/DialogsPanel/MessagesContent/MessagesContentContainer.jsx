import { addNewMessagesTextActionCreator,addMessagesActionCreator, ADD_MESSAGES } from "../../../../redux/dialogsReducer"
import { connect } from "react-redux"
import MessagesContent from './MessagesContent';

let mapStateToProps = (state) => {
    return {
        dataDialog: state.dataDialog
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => { dispatch(addNewMessagesTextActionCreator(text))},
        addElements: () => { dispatch(addMessagesActionCreator(true, "Aleksander"))}
    }
}
const MessagesContentContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesContent)
export default MessagesContentContainer





