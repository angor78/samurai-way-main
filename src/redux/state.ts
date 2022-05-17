//REDUX

import {v1} from "uuid";
import {renderTree} from "../renderTree";

export type StatePropsType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type ProfilePageType = {
  posts: Array<PostType>
  newTextPost:string
}
export type DialogsPageType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  newTextMessage:string
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

const state = {

  profilePage: {
    newTextPost:'',
    posts: [
      {id: v1(), message: 'Hi, how a yo?', likeCount: 12},
      {id: v1(), message: "It's my first yo.", likeCount: 1},
    ]
  },
  dialogsPage: {
    newTextMessage:'',
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
  sidebar: {
    friends: [
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
      }
    ]
  }
}
export const addPost = (textToPost:string) => {
  const newPost: PostType = {id: v1(), message: textToPost, likeCount: 0}
  state.profilePage.posts.push(newPost)
  renderTree(state)
}
export const addMessage = (newTextToMessage: string) => {
  const newMessage: MessageType = {id: v1(), message: newTextToMessage}
  state.dialogsPage.messagesData.push(newMessage)
  renderTree(state)
}
export const changeTextPost = (postText:string) => {
  state.profilePage.newTextPost = postText
  renderTree(state)
}
export const changeTextMessage = (textMessage: string) => {
  state.dialogsPage.newTextMessage=textMessage
  renderTree(state)
}
export default state
