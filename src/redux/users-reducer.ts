import {ActionTypes} from "./storeTypes";
import {Dispatch} from "redux";
import {followAPI, unfollowAPI, usersAPI} from "../api/api";


const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING = 'users/TOGGLE_FOLLOWING'

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
  following: boolean
}


let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 500,
  currentPage: 1,
  isFetching: false,
  following: false
}


export const usersReducer = (state: initialUsersStateType = initialState, action: ActionTypes): initialUsersStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el),

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
    case TOGGLE_FOLLOWING:
      return {...state, following: action.following}

    default:
      return state

  }
}

export type FollowACType = ReturnType<typeof followSuccess>
export const followSuccess = (userID: number) => {
  return {type: FOLLOW, userID} as const
}

export type UnfollowACType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userID: number) => {
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
export type ToggleIsFollowingType = ReturnType<typeof toggleIsFollowing>
export const toggleIsFollowing = (following: boolean) => {
  return {type: TOGGLE_FOLLOWING, following} as const
}


//Thunk
export const getUsers = ((currentPage: number, pageSize: number) =>
  async function (dispatch: Dispatch) {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.data.items))
    dispatch(setTotalUsersCount(data.data.totalCount))
  })

export const follow = (userId: number) =>
  (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(true))
    followAPI.follow(userId)
      .then(data => {
        if (data.data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleIsFollowing(false))
      })
  }

export const unfollow = (userId: number) =>
  (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(true))
    unfollowAPI.unfollow(userId)
      .then(data => {
        if (data.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleIsFollowing(false))
      })
  }


