import {applyMiddleware, combineReducers, legacy_createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {ActionTypes, StoreType} from "./storeTypes";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
let store: Store<StoreType, ActionTypes> = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store