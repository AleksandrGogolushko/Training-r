const navigationReducer = (state,action) =>{



    return state
}


// changeNewText(data, type, text) {
//     this._state[data][type] = text
//     this._callSubscriber(this._state)
//  },

//   addElements(data, type, childData) {
//      let content = data === "profileData" ?
//          {
//              id: this._state.profileData.postsData[this._state.profileData.postsData.length - 1].id + 1,
//              text: this._state.profileData.newTextPosts
//          } :
//          {
//              id: this._state.dataDialog.messagesData[this._state.dataDialog.messagesData.length - 1].id + 1,
//              messages: this._state.dataDialog.newMessagesText,
//              mainAuthor: true,
//              author: "Alexander"
//          };
//      this._state[data][childData].push(content)
//      this._state[data][type] = ""
//      this._callSubscriber(this._state)
//  },