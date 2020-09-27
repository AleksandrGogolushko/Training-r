import React from 'react';
import style from "./Status.module.css"


class Status extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
            this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div className={style.status}>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={() => this.activateEditMode()}>{this.props.status}</span>
                </div> :
                <div>
                    <input autoFocus={true} onBlur={() => this.deActivateEditMode()} type="text" value={this.props.status} />
                </div>
            }
        </div>
    }
}
// = (props)=>{
//     return(
//         <div className={style.status}>
//           <div>
//           <p>{props.status}</p>
//           </div>
//           <div>
//               <input type="text" value={props.status}/>
//           </div>
//         </div>
//     )
// }

export default Status