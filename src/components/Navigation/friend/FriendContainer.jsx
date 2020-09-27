import { connect } from "react-redux"
import Friend from "./Friend";


let mapStateToProps = (state) => {
    return {
        friend: state.dataDialog.dialogsData
    }
}

const FriendContainer = connect(mapStateToProps)(Friend)
export default FriendContainer
