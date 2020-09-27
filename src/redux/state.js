import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"

let store = {
    _state: {
        profileData: {
            newTextPosts: "",
            postsData: [{ id: 1, text: "Hello everyone!" }, { id: 2, text: "Today I learn React" },],
            personData: [{ name: "Alexander G.", Birth: "2 september", City: "Lida", Education: "BNTU", Site: "Github" }]
        },

        dataDialog: {
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
    },
    _callSubscriber() {
        console.log("state change")
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profileData = profileReducer(this._state.profileData,action);
        this._state.dataDialog = dialogsReducer(this._state.dataDialog,action);
        this._callSubscriber(this._state)
      
    }
}

export default store