import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import Users from "./Users";


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

export default UsersC