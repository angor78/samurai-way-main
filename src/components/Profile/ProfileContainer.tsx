import "./Profile.module.css"
import {connect} from "react-redux";
import {
  addPost,
  changeTextPost, getUserProfile,
  initialProfileStateType, setUserProfile,
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Profile from "./Profile";
import {Navigate, useParams} from "react-router-dom";

type ProfileClassContainerType = ProfilePropsType & {
  router: { params: { userId: string } }
  getUserProfile: (userId: string) => void
  isAuth: boolean
}

class ProfileClassContainer extends React.Component<ProfileClassContainerType> {

  componentDidMount() {
    let userId = this.props.router.params.userId
    this.props.getUserProfile(userId)
  }

  render() {
    if (!this.props.isAuth){return <Navigate to={'/login'}/>}
      return (
        <Profile {...this.props} />
      )
  }
}

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: ProfilePropsType) {
    let params = useParams();
    return (
      <Component
        {...props}
        router={{params}}
      />
    );
  }

  return ComponentWithRouterProp;
}


//REACT-REDUX CONNECT
type MapStatePropsType = {
  profilePage: initialProfileStateType
  isAuth: boolean
}
type MapDispatchPropsType = {
  addPost: () => void
  changeTextPost: (text: string) => void
  setUserProfile: (profile: any) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profilePage: state.profilePage,
    isAuth: state.auth.isAuth
  }
}

export const ProfileContainer = connect(mapStateToProps,
  {addPost, changeTextPost, setUserProfile, getUserProfile})(withRouter(ProfileClassContainer))