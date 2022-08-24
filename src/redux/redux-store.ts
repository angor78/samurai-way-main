import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";
import {composeWithDevTools} from "@redux-devtools/extension";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
  )
);

// let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store