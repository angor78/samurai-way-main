import {v1} from "uuid";
import {ActionTypes, PostType} from "./storeTypes";


const ADD_POST = 'ADD-POST'
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST'

export type initialProfileStateType = {
  newTextPost: string
  posts: Array<{id: string, message: string, likeCount: number}>

}

let initialState = {
  newTextPost: '',
  posts: [
    {id: v1(), message: "It's my first yo.", likeCount: 1},
    {id: v1(), message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likeCount: 1},
    {id: v1(), message: "It's my first yo.", likeCount: 1},
    {id: v1(), message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad assumenda at consequatur cumque dolore eius est ipsam iure magnam magni, nihil placeat quia quibusdam, quis, temporibus voluptatem. Accusantium, quos?\n', likeCount: 12},

  ]as Array<PostType>
}



export const profileReducer = (state:initialProfileStateType = initialState, action:ActionTypes):initialProfileStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {id: v1(), message: state.newTextPost, likeCount: 0}
      let stateCopy = {...state, posts: [newPost, ...state.posts]}
      stateCopy.newTextPost = ''
      return stateCopy
    }
    case CHANGE_TEXT_POST: {
      const stateCopy = {...state}
      stateCopy.newTextPost = action.postText
      return stateCopy
    }
    default:
      return state
  }
}


export const addPostActionCreator = () => {
  return {type: 'ADD-POST'} as const
}
export const changeTextPostActionCreator = (postText: string) => {
  return {type: 'CHANGE-TEXT-POST', postText: postText} as const
}