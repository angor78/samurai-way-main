import {v1} from "uuid";
import {ActionTypes, PostType} from "./storeTypes";
import {getUserProfileAPI, ProfileStatusAPI} from "../api/api";
import {Dispatch} from "redux";


const ADD_POST = 'ADD-POST'
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

export type initialProfileStateType = {
  profile: any
  newTextPost: string
  posts: Array<{ id: string, message: string, likeCount: number }>
  status: string
}

let initialState = {
  profile: null,
  newTextPost: '',
  posts: [
    {id: v1(), message: "It's my first yo.", likeCount: 1},
    {id: v1(), message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likeCount: 1},
    {id: v1(), message: "It's my first yo.", likeCount: 1},
    {
      id: v1(),
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad assumenda at consequatur cumque dolore eius est ipsam iure magnam magni, nihil placeat quia quibusdam, quis, temporibus voluptatem. Accusantium, quos?\n',
      likeCount: 12
    },
  ] as Array<PostType>,
  status: ''
}


export const profileReducer = (state: initialProfileStateType = initialState, action: ActionTypes): initialProfileStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {id: v1(), message: state.newTextPost, likeCount: 0}
      return {...state, newTextPost: '', posts: [newPost, ...state.posts]}

    case CHANGE_TEXT_POST:
      return {...state, newTextPost: action.postText}

    case SET_USER_PROFILE:
      return {...state, profile: action.profile}

    case SET_STATUS:
      return {...state, status: action.status}

    default:
      return state
  }
}


export const addPost = () => {
  return {type: 'ADD-POST'} as const
}
export const changeTextPost = (postText: string) => {
  return {type: 'CHANGE-TEXT-POST', postText: postText} as const
}

export type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => {
  return {type: SET_USER_PROFILE, profile} as const
}
export type SetStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
  return {type: SET_STATUS, status} as const
}

//Thunk
export const getUserProfile = (userId: string) =>
  (dispatch: Dispatch) => {
    getUserProfileAPI.getUserProfile(userId).then(data => {
      dispatch(setUserProfile(data.data))
    })
  }
export const getStatus = (userId: string) =>
  (dispatch: Dispatch) => {
    ProfileStatusAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data.data))
    })
  }
export const updateStatus = (status: string) =>
  (dispatch: Dispatch) => {
    ProfileStatusAPI.updateStatus(status).then(data => {
      if(data.data.resultCode===0){
        dispatch(setStatus(status))
      }
    })
  }