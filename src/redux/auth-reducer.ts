import {ActionTypes} from "./storeTypes";
import {Dispatch} from "redux";
import {authMeAPI} from "../api/api";


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
        id: action.id,
        email: action.email,
        login: action.login,
        isAuth: action.isAuth
      }

    default:
      return state

  }
}


export type SetUsersDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => {
  return {
    type: SET_USERS_DATA, id, email, login, isAuth
  } as const
}

//Thunk
export const authMe = () =>
  (dispatch: Dispatch) => {
    authMeAPI.authMe().then(res => {
      if (res.data.resultCode === 0) {
        let data = res.data.data
        dispatch(setAuthUserData(data.id, data.email, data.login, true))
      }

    })
  }

export const login = (email: string, password: string, rememberMe: boolean, captcha: boolean, setStatus:any) =>
  (dispatch: any) => {
    authMeAPI.login(email, password, rememberMe, captcha)
      .then(data => {
        if (data.data.resultCode === 0) {
          dispatch(authMe())
          window.location.replace(`/`)
        } else {
          setStatus({error:data.data.messages})
        }
      })
  }
export const logout = () =>
  (dispatch: Dispatch) => {
    authMeAPI.logout()
      .then(data => {
        if (data.data.resultCode === 0) {
          dispatch(setAuthUserData(0, '', '', false))
        }
      })
  }







