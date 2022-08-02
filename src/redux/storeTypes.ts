import {addMessageActionCreator} from "./dialogs-reducer";
import {addPost, changeTextPost, SetStatusType, SetUserProfileType} from "./profile-reducer";
import {
  FollowACType,
  SetCurrentPageACType,
  SetTotalUsersCountACType,
  SetUsersACType, ToggleIsFetchingACType, ToggleIsFollowingType,
  UnfollowACType
} from "./users-reducer";
import {SetUsersDataType} from "./auth-reducer";
import {InitializedSuccessType} from "./app-reducer";

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
  profile: ProfileType
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
export type ProfileType = {
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  aboutMe: string
  contacts: { facebook: string, github: string, instagram: string, mainLink: string, twitter: string, vk: string, website: string, youtube: string }
  photos: { small: string, large: string }
  userId: number
}
export type AddPostActionType = ReturnType<typeof addPost>
export type ChangeTextPostActionType = ReturnType<typeof changeTextPost>
export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>

export type ActionTypes =
  AddPostActionType
  | ChangeTextPostActionType
  | AddMessageActionType
  | FollowACType
  | UnfollowACType
  | SetUsersACType
  | SetCurrentPageACType
  | SetTotalUsersCountACType
  | ToggleIsFetchingACType
  | SetUserProfileType
  | SetUsersDataType
  | ToggleIsFollowingType
  | SetStatusType
  | InitializedSuccessType

