import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, initialUsersStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
  usersPage: initialUsersStateType
}
type MapDispatchPropsType = {
  follow: (userID: string) => void
  unfollow: (userID: string) => void
  setUsers:(users:Array<UserType>)=>void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    usersPage: state.usersPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (userID: string) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID: string) => {
      dispatch(unfollowAC(userID))
    },
    setUsers: (users:Array<UserType>) => {
      dispatch(setUsersAC(users))
    }
  }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)