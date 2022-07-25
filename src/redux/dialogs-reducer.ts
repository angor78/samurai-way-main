import {v1} from "uuid";
import {ActionTypes, DialogType, MessageType} from "./storeTypes";


const ADD_MESSAGE = 'ADD-MESSAGE'
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
    {id: v1(), message: "Fine!"},
    {id: v1(), message: "Yo"},
  ] as Array<MessageType>
}
export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessageType = {id: v1(), message: action.value}
      return {...state, messagesData: [...state.messagesData, newMessage]}


    default:
      return state
  }
}

export const addMessageActionCreator = (value:string) => {
  return {type: 'ADD-MESSAGE', value} as const
}

