import { connect } from "react-redux"
import MessagesItem from './MessagesIthem';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dataDialog.dialogsData
    }
}

const MessagesItemContainer = connect(mapStateToProps)(MessagesItem)
export default MessagesItemContainer





