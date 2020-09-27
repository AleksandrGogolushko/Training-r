const CHANGE_NEW_TEXT_MESSAGES = "CHANGE-NEW-TEXT-MESSAGES";
export const ADD_MESSAGES = "ADD-MESSAGES"

let initialState = {
    newMessagesText: "",
    messagesData: [
        { id: 1, author: "Alexander", messages: "Hello my enemy", mainAuthor: true },
        { id: 2, author: "Mikhail", messages: "Hello frog", mainAuthor: false },
        { id: 3, author: "Alexander", messages: "Hello dog", mainAuthor: true },
        { id: 4, author: "Mikhail", messages: "Hello cat", mainAuthor: false },
    ],
    dialogsData: [
        { id: 1, name: "Alexander", className: "active" },
        { id: 2, name: "Mikhail" },
        { id: 3, name: "Grindelia" },
        { id: 4, name: "Driveldel" },
        { id: 5, name: "Frefsen" },
        { id: 6, name: "Hretes" },
        { id: 7, name: "Reckort" },
        { id: 8, name: "Coltusx" }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGES:
            let content = {
                id: state.messagesData[state.messagesData.length - 1].id + 1,
                author: action.author,
                messages: state.newMessagesText,
                mainAuthor: action.mainAuthor
            };
            return {
                ...state,
                newMessagesText: "",
                messagesData: [...state.messagesData, content]
            }
        case CHANGE_NEW_TEXT_MESSAGES:
            return {
                ...state,
                newMessagesText: action.text
            }
        default:
            return state
    }

}


export const addMessagesActionCreator = (mainAuthor, author) => ({ type: ADD_MESSAGES, mainAuthor: mainAuthor, author: author })

export const addNewMessagesTextActionCreator = (text) => ({ type: CHANGE_NEW_TEXT_MESSAGES, text: text })

export default dialogsReducer
