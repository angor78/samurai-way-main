import {v1} from "uuid";
import {ActionTypes, ProfilePageType} from "./state";


const ADD_POST = 'ADD-POST'
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST'


export const profileReduser = (state: ProfilePageType, action: ActionTypes) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {id: v1(), message: action.newTextPost, likeCount: 0}
      state.posts.push(newPost)
      state.newTextPost = ''
      return state
    case CHANGE_TEXT_POST:
      state.newTextPost = action.postText
      return state
    default:
      return state
  }
}
export const addPostActionCreator = (newPostText: string) => {
  return {type: 'ADD-POST', newTextPost: newPostText} as const
}
export const changeTextPostActionCreator = (postText: string) => {
  return {type: 'CHANGE-TEXT-POST', postText: postText} as const
}