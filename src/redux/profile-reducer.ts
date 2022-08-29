import {v1} from "uuid";
import {ActionTypes, PostType} from "./storeTypes";
import {getUserProfileAPI, ProfileStatusAPI} from "../api/api";
import {Dispatch} from "redux";
import img1 from './../images/posts-images/1.jpeg'
import img2 from './../images/posts-images/2.jpg'
import img3 from './../images/posts-images/3.jpg'
import img4 from './../images/posts-images/4.png'


const ADD_POST = '/profile/ADD-POST'
const DELETE_POST = '/profile/DELETE-POST'
const CHANGE_TEXT_POST = '/profile/CHANGE-TEXT-POST'
const SET_USER_PROFILE = '/profile/SET-USER-PROFILE'
const SET_STATUS = '/profile/SET-STATUS'

export type initialProfileStateType = {
  profile: any
  newTextPost: string
  posts: Array<{ id: string, message: string, likeCount: number, photo: string }>
  status: string
  photos?: File | string
}

let initialState = {
  profile: null,
  newTextPost: '',
  posts: [
    {id: '1', message: "It's my first yo.Lorem ipsum" +
        " dolor sit amet elit.", likeCount: 1, photo: img1},
    {id: '2', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likeCount: 1, photo: img2},

    {id: '3', message: "It's my first yo.", likeCount: 1, photo: img3},
    {
      id: '4',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad assumenda at consequatur cumque dolore eius est ipsam iure magnam magni, nihil placeat quia quibusdam, quis, temporibus voluptatem. Accusantium, quos?\n',
      likeCount: 12, photo: img4
    },

  ] as Array<PostType>,
  status: '',
  photos: ''
}


export const profileReducer = (state: initialProfileStateType = initialState, action: ActionTypes): initialProfileStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {id: v1(), message: action.message, likeCount: 0, photo: img4}
      return {...state, newTextPost: '', posts: [newPost, ...state.posts]}
    case DELETE_POST:
      return {...state, posts: state.posts.filter(el => el.id !== action.postId)}
    case CHANGE_TEXT_POST:
      return {...state, newTextPost: action.postText}

    case SET_USER_PROFILE:
      return {...state, profile: action.profile}

    case SET_STATUS:
      return {...state, status: action.status}

    case "SET_PHOTOS":
      return {...state, photos: action.file}

    default:
      return state
  }
}


export const addPost = (message: string) => {
  return {type: ADD_POST, message} as const
}
export type deletePostType = ReturnType<typeof deletePost>
export const deletePost = (postId: string) => {
  return {type: DELETE_POST, postId} as const
}
export const changeTextPost = (postText: string) => {
  return {type: CHANGE_TEXT_POST, postText: postText} as const
}

export type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => {
  return {type: SET_USER_PROFILE, profile} as const
}
export type SetStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
  return {type: SET_STATUS, status} as const
}
export type SetPhotoSuccessType = ReturnType<typeof setPhotoSuccess>
export const setPhotoSuccess = (file: any) => {
  return {type: 'SET_PHOTOS', file} as const
}

//Thunk
export const getUserProfile = ((userId: string) =>
  async function (dispatch: Dispatch) {
    let data = await getUserProfileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data.data))

  })
export const getStatus = ((userId: string) =>
  async function (dispatch: Dispatch) {
    let data = await ProfileStatusAPI.getStatus(userId)
    dispatch(setStatus(data.data))
  })
export const updateStatus = (status: string) =>
  (dispatch: Dispatch) => {
    ProfileStatusAPI.updateStatus(status).then(data => {
      if (data.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
export const savePhoto = (photos: any[]) =>
  (dispatch: any) => {
    ProfileStatusAPI.savePhoto(photos).then(data => {
      if (data.data.resultCode === 0) {
        dispatch(setPhotoSuccess(data.data.large))
      }
    })
  }