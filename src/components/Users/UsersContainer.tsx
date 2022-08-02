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
import {
  getCurentPage,
  getFollowing,
  getIsfetching,
  getPageSize,
  getTotalUsersCount,
  getUsersPage
} from "../../redux/users-selectors";

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
    usersPage: getUsersPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurentPage(state),
    isFetching: getIsfetching(state),
    following: getFollowing(state)
  }
}

export const UsersContainer = connect(mapStateToProps,
  {
    follow: follow,
    unfollow: unfollow,
    setTotalUsersCount: setTotalUsersCount,
    getUsers
  })(UsersClassContainer)