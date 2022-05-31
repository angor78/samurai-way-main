import {v1} from "uuid";
import {ActionTypes, DialogsPageType, MessageType} from "./state";


const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE'

export const dialogsReduser = (state: DialogsPageType, action: ActionTypes) => {
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
