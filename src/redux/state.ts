
import {v1} from "uuid";

export type StoreType = {
  _state: StatePropsType
  getState: () => StatePropsType
  addPost: (newTextPost: string) => void
  changeTextPost: (postText: string) => void
  addMessage: (newTextMessage: string) => void
  changeTextMessage: (textMessage: string) => void
  subscriber: (observer: () => void) => void
  _rerender: () => void
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


let store: StoreType = {
  _state: {
    profilePage: {
      newTextPost: '',
      posts: [
        {id: v1(), message: 'Hi, how a yo?', likeCount: 12},
        {id: v1(), message: "It's my first yo.", likeCount: 1},
      ]
    },
    dialogsPage: {
      newTextMessage: '',
      dialogsData: [
        {
          id: 1,
          name: "Dimych",
          avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
        },
        {
          id: 2,
          name: "Andrey",
          avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
        },
        {
          id: 3,
          name: "Frog",
          avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
        },
        {
          id: 4,
          name: "Sveta",
          avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
        },
        {
          id: 5,
          name: "Katya",
          avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
        },
        {
          id: 6,
          name: "Frosia",
          avatar: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
        },
      ],
      messagesData: [
        {id: v1(), message: "First comment!"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "Fine!"},
        {id: v1(), message: "Yo"},
      ]
    },

  },
  getState() {return this._state},
  _rerender() {
    console.log("render")
  },
  subscriber(observer:any) {
    this._rerender = observer
  },
  addPost(newTextPost: string) {
    let newPost = {id: v1(), message: newTextPost, likeCount: 0}

    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newTextPost = ''
    this._rerender()
  },
  changeTextPost(postText: string) {
    this._state.profilePage.newTextPost = postText
    this._rerender()
  },
  addMessage(newTextMessage: string) {
    const newMessage: MessageType = {id: v1(), message: newTextMessage}
    this._state.dialogsPage.messagesData.push(newMessage)
    this._state.dialogsPage.newTextMessage = ''
    this._rerender()
  },
  changeTextMessage(textMessage: string) {
    this._state.dialogsPage.newTextMessage = textMessage
    this._rerender()
  },
}


export default store
