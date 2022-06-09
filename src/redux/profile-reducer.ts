import {v1} from "uuid";
import {ActionTypes} from "./store";


const ADD_POST = 'ADD-POST'
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST'

type initialStateType = {
  newTextPost: string
  posts: Array<{id: string, message: string, likeCount: number}>

}

let initialState:initialStateType = {
  newTextPost: '',
  posts: [
    {id: v1(), message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad assumenda at consequatur cumque dolore eius est ipsam iure magnam magni, nihil placeat quia quibusdam, quis, temporibus voluptatem. Accusantium, quos?\n', likeCount: 12},
    {id: v1(), message: "It's my first yo.", likeCount: 1},
    {id: v1(), message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likeCount: 1},
    {id: v1(), message: "It's my first yo.", likeCount: 1},
  ]
}



export const profileReducer = (state = initialState, action:ActionTypes):initialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {id: v1(), message: action.newTextPost, likeCount: 0}
      let newPosts = [newPost,...state.posts]
      state.newTextPost = ''
      return {...state,posts:newPosts}
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