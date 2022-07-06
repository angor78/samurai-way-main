import {connect} from "react-redux";
import {
  follow,
  initialUsersStateType,
  setCurrentPage, setTotalUsersCount,
  setUsers, toggleIsFetching, toggleIsFollowing,
  unfollow,
  UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
  usersPage: initialUsersStateType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  following: boolean
}
type MapDispatchPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (total: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleIsFollowing: (following: boolean) => void
}


class UsersClassContainer extends React.Component<UsersPropsType> {

  componentDidMount() {
    if (this.props.usersPage.users.length === 0) {
      this.props.toggleIsFetching(true)
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      })
    }
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
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
             following={this.props.following}
             toggleIsFetching={this.props.toggleIsFetching}
             toggleIsFollowing={this.props.toggleIsFollowing}
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
    following: state.usersPage.following
  }
}

export const UsersContainer = connect(mapStateToProps,
  {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount,
    toggleIsFetching: toggleIsFetching,
    toggleIsFollowing: toggleIsFollowing
  })(UsersClassContainer)