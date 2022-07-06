import {ActionTypes} from "./storeTypes";


const SET_USERS_DATA = 'SET_USERS_DATA'


export type initialAuthType = {
  id: number
  email: string
  login: string
  isAuth: boolean
}


let initialAuth = {
  id: 0,
  email: '',
  login: '',
  isAuth: false
}


export const authReducer = (state: initialAuthType = initialAuth, action: ActionTypes): initialAuthType => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        id: action.data.data.id,
        email: action.data.data.email,
        login: action.data.data.login,
        isAuth: action.data.resultCode === 0 && true
      }
    default:
      return state

  }
}


export type SetUsersDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data:any) => {
  return {
    type: SET_USERS_DATA, data
  } as const
}




