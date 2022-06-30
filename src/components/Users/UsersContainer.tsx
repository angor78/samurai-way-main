import {connect} from "react-redux";
import {
  followAC,
  initialUsersStateType,
  setCurrentPageAC, setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import UsersC from "./UsersAPIRequest";

type MapStatePropsType = {
  usersPage: initialUsersStateType
  pageSize: number
  totalUsersCount: number
  currentPage: number
}
type MapDispatchPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage:(currentPage:number)=>void
  setTotalUsersCount:(total:number)=>void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID: number) => {
      dispatch(unfollowAC(userID))
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalUsersCount: number) => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    }
  }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)