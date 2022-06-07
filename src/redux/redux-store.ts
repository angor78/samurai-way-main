import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {StoreType} from "./store";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})
// type RootReducersType = typeof reducers
// export type RootStoreType = ReturnType<RootReducersType>

let store:StoreType = createStore(reducers)

export default store