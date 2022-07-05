import {ActionTypes} from "./storeTypes";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

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
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}


let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 2,
  isFetching: false,
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
      return {...state, users: [...action.users]}

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount}

    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}

    default:
      return state

  }
}

export type FollowACType = ReturnType<typeof follow>
export const follow = (userID: number) => {
  return {type: FOLLOW, userID} as const
}

export type UnfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userID: number) => {
  return {type: UNFOLLOW, userID} as const
}

export type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
  return {type: SET_USERS, users} as const
}

export type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
  return {type: SET_CURRENT_PAGE, currentPage} as const
}

export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
  return {type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}

export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
  return {type: TOGGLE_IS_FETCHING, isFetching} as const
}


