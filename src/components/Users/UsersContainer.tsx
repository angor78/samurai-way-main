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
import React from "react";
import axios from "axios";
import Users from "./Users";

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


class UsersC extends React.Component<UsersPropsType> {

  componentDidMount() {
    if (this.props.usersPage.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
      })
    }
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      // this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  render = () => {
    return (
      <Users usersPage={this.props.usersPage}
             pageSize={this.props.pageSize}
             totalUsersCount={this.props.totalUsersCount}
             currentPage={this.props.currentPage}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             setUsers={this.props.setUsers}
             setCurrentPage={this.props.setCurrentPage}
             setTotalUsersCount={this.props.setTotalUsersCount}
             onPageChanged={this.onPageChanged}/>
    )
  }
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