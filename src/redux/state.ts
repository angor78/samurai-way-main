//REDUX

import {v1} from "uuid";
import {renderTree} from "../index";

export type StatePropsType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type ProfilePageType = {
  posts: Array<PostType>
}
export type DialogsPageType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
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
  id: number
  message: string
}

const state = {

  profilePage: {
    posts: [
      {id: v1(), message: 'Hi, how a yo?', likeCount: 12},
      {id: v1(), message: "It's my first yo.", likeCount: 1},
    ]
  },
  dialogsPage: {
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
      {id: 1, message: "First comment!"},
      {id: 2, message: "How are you?"},
      {id: 3, message: "Fine!"},
      {id: 4, message: "Yo"},
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
export default state
export const addPost = (newTextToPost: string) => {
  const newPost = {id: v1(), message: newTextToPost, likeCount: 0}
  state.profilePage.posts.push(newPost)
  renderTree(state)
}