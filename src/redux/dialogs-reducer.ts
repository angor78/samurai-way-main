import {v1} from "uuid";
import {ActionTypes, DialogType, MessageType} from "./storeTypes";


const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE'
export type InitialStateType = typeof initialState
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
  ] as Array<DialogType>,
  messagesData: [
    {id: v1(), message: "First comment!"},
    {id: v1(), message: "How are you?"},
    {id: v1(), message: "Fine!"},
    {id: v1(), message: "Yo"},
  ] as Array<MessageType>
}
export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessageType = {id: v1(), message: state.newTextMessage}
      state.messagesData.push(newMessage)
      state.newTextMessage = ''
      return {...state}
    case CHANGE_TEXT_MESSAGE:
      state.newTextMessage = action.textMessage
      return {...state}
    default:
      return state
  }
}

export const addMessageActionCreator = () => {
  return {type: 'ADD-MESSAGE'} as const
}
export const changeTextMessageActionCreator = (textMessage: string) => {
  return {type: 'CHANGE-TEXT-MESSAGE', textMessage: textMessage} as const
}
