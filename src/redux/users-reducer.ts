import {ActionTypes} from "./storeTypes";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
  name: string,
  id: number,
  uniqueUrlName: string,
  photos:
    {
      small: string,
      large: string,
    }
  status: string,
  followed: boolean,
}

export type initialUsersStateType = {
  users: Array<UserType>
}


let initialState = {
  users:
    [
      // {
      //   name: 'Andrey',
      //   id: 1,
      //   uniqueUrlName: 'string',
      //   photos: {
      //     small: 'https://cdn-icons-png.flaticon.com/512/560/560216.png',
      //     large: 'https://cdn-icons-png.flaticon.com/512/560/560216.png',
      //   },
      //   status: 'Status here...',
      //   followed: false,
      // },
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
export const followAC = (userID: number) => {
  return {type: FOLLOW, userID} as const
}

export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: number) => {
  return {type: UNFOLLOW, userID} as const
}

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
  return {type: SET_USERS, users} as const
}


