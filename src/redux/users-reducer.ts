import {ActionTypes} from "./storeTypes";
import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
  id: string
  fullName: string
  status: string
  location: { country: string, city: string }
  followed: boolean
  photoUrl:string
}

export type initialUsersStateType = {
  users: Array<UserType>
}

let initialState = {
  users: [
    {
      id: v1(),
      followed: false,
      fullName: 'Andrey',
      status: 'Status here...',
      location: {country: 'Russia', city: 'Penza'},
      photoUrl:'https://cdn-icons-png.flaticon.com/512/3237/3237472.png'
    },
    {
      id: v1(),
      followed: true,
      fullName: 'Evgen',
      status: 'Status here...',
      location: {country: 'Belarus', city: 'Bobruisk'},
      photoUrl:'https://cdn-icons-png.flaticon.com/512/3237/3237472.png'

    },
    {
      id: v1(),
      followed: false,
      fullName: 'Fara',
      status: 'Status here...',
      location: {country: 'Kazakhstan', city: 'Temirtay'},
      photoUrl:'https://cdn-icons-png.flaticon.com/512/3237/3237472.png'

    },
    {
      id: v1(),
      followed: true,
      fullName: 'Iliya',
      status: 'Status here...',
      location: {country: 'Russia', city: 'Mias'},
      photoUrl:'https://cdn-icons-png.flaticon.com/512/3237/3237472.png'
    },
  ] as Array<UserType>
}


export const usersReducer = (state: initialUsersStateType = initialState, action: ActionTypes): initialUsersStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)
      }
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}

    default:
      return state

  }
}

export type followACType = ReturnType<typeof followAC>
export const followAC = (userID: string) => {
  return {type: FOLLOW, userID} as const
}

export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: string) => {
  return {type: UNFOLLOW, userID} as const
}

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
  return {type: SET_USERS, users} as const
}


