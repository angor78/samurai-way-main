import {addMessageActionCreator, changeTextMessageActionCreator} from "./dialogs-reducer";
import {addPostActionCreator, changeTextPostActionCreator} from "./profile-reducer";


export type StoreType = {
  _state: StatePropsType
  getState: () => StatePropsType
  dispatch: (action: ActionTypes) => void
  subscribe: (observer: () => void) => void
  _callSubscriber: () => void
}

export type StatePropsType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type ProfilePageType = {
  posts: Array<PostType>
  newTextPost: string
}
export type DialogsPageType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  newTextMessage: string
}

export type PostType = {
  id: string
  message: string
  likeCount: number
}
export type DialogType = {
  id: number
  name: string
  avatar?: string
}
export type MessageType = {
  id: string
  message: string
}


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeTextPostActionType = ReturnType<typeof changeTextPostActionCreator>
export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type ChangeTextMessageActionType = ReturnType<typeof changeTextMessageActionCreator>
export type ActionTypes =
  AddPostActionType
  | ChangeTextPostActionType
  | AddMessageActionType
  | ChangeTextMessageActionType


// let store: StoreType = {
//   _state: {
//     profilePage: {
//       newTextPost: '',
//       posts: [
//         {id: v1(), message: 'Hi, how a yo?', likeCount: 12},
//         {id: v1(), message: "It's my first yo.", likeCount: 1},
//       ]
//     },
//     dialogsPage: {
//       newTextMessage: '',
//       dialogsData: [
//         {
//           id: 1,
//           name: "Dimych",
//           avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
//         },
//         {
//           id: 2,
//           name: "Andrey",
//           avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
//         },
//         {
//           id: 3,
//           name: "Frog",
//           avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
//         },
//         {
//           id: 4,
//           name: "Sveta",
//           avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
//         },
//         {
//           id: 5,
//           name: "Katya",
//           avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
//         },
//         {
//           id: 6,
//           name: "Frosia",
//           avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
//         },
//       ],
//       messagesData: [
//         {id: v1(), message: "First comment!"},
//         {id: v1(), message: "How are you?"},
//         {id: v1(), message: "Fine!"},
//         {id: v1(), message: "Yo"},
//       ]
//     },
//
//   },
//   getState() {
//     return this._state
//   },
//   _callSubscriber() {
//     console.log("render")
//   },
//   subscribe(observer: any) {
//     this._callSubscriber = observer
//   },
//
//   // dispatch(action) {
//   //   this._state.profilePage = profileReducer(this._state.profilePage, action)
//   //   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//   //   this._callSubscriber()
//   // },
// }
// export default store
