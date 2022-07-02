import {connect} from "react-redux";
import {
  follow,
  initialUsersStateType,
  setCurrentPage, setTotalUsersCount,
  setUsers, toggleIsFetching,
  unfollow,
  UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import Users from "./Users";

type MapStatePropsType = {
  usersPage: initialUsersStateType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}
type MapDispatchPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (total: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}


class UsersClassContainer extends React.Component<UsersPropsType> {

  componentDidMount() {
    if (this.props.usersPage.users.length === 0) {

      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
    }
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false)
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
             toggleIsFetching={this.props.toggleIsFetching}
             isFetching={this.props.isFetching}
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
    isFetching: state.usersPage.isFetching,
  }
}

export const UsersContainer = connect(mapStateToProps,
  {
    follow:follow,
    unfollow:unfollow,
    setUsers:setUsers,
    setCurrentPage:setCurrentPage,
    setTotalUsersCount:setTotalUsersCount,
    toggleIsFetching:toggleIsFetching,
  })(UsersClassContainer)