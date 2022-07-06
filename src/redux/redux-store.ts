import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {ActionTypes, StoreType} from "./storeTypes";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

let store: Store<StoreType, ActionTypes> = createStore(rootReducer)

export default store