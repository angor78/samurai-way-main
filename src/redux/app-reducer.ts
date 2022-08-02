import {ActionTypes} from "./storeTypes";
import {authMe} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type initialAppType = {
  initialized: boolean
}


let initialApp = {
  initialized: false
}

export const appReducer = (state: initialAppType = initialApp, action: ActionTypes): initialAppType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {...state, initialized: true}
    default:
      return state

  }
}


export type InitializedSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS
  } as const
}

//Thunk
export function inititializeApp() {
  return async function (dispatch: any) {
    let promise = dispatch(authMe())
    await promise
    dispatch(initializedSuccess())
  }
}









