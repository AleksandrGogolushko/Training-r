import { connect } from "react-redux"
import Person from "./Person"


let mapStateToProps = (state) => {
    return {
        personData: state.profileData.personData,
        profile:state.profileData.profile
    }
}

const PersonContainer = connect(mapStateToProps)(Person)
export default PersonContainer
