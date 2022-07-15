import {connect} from "react-redux";
import {
  follow, getUsers,
  initialUsersStateType,
  setTotalUsersCount,
  unfollow,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";

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
  setTotalUsersCount: (total: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}


class UsersClassContainer extends React.Component<UsersPropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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
             isFetching={this.props.isFetching}
             setTotalUsersCount={this.props.setTotalUsersCount}
             onPageChanged={this.onPageChanged}
             getUsers={this.props.getUsers}
      />
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
    setTotalUsersCount: setTotalUsersCount,
    getUsers
  })(UsersClassContainer)