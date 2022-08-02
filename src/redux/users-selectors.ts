import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersSelector = (state: AppStateType) => {
  return state.usersPage.users
}
export const getUsersSuper = createSelector(getUsersSelector, (users) => {
  return users
})
export const getUsersPage = (state: AppStateType) => {
  return state.usersPage
}
export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount
}
export const getCurentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}
export const getIsfetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}
export const getFollowing = (state: AppStateType) => {
  return state.usersPage.following
}
