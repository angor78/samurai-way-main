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