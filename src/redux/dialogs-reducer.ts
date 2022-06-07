import {v1} from "uuid";
import {ActionTypes, MessageType} from "./store";


const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE'

let initialState = {
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
}
export const dialogsReducer = (state=initialState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessageType = {id: v1(), message: action.newTextMessage}
      state.messagesData.push(newMessage)
      state.newTextMessage = ''
      return state
    case CHANGE_TEXT_MESSAGE:
      state.newTextMessage = action.textMessage
      return state
    default:
      return state
  }
}

export const addMessageActionCreator = (newTextMessage: string) => {
  return {type: 'ADD-MESSAGE', newTextMessage: newTextMessage} as const
}
export const changeTextMessageActionCreator = (textMessage: string) => {
  return {type: 'CHANGE-TEXT-MESSAGE', textMessage: textMessage} as const
}
