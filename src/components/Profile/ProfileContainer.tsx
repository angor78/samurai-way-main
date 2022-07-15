import "./Profile.module.css"
import {connect} from "react-redux";
import {
  addPost,
  changeTextPost,
  initialProfileStateType,
  setUserProfile
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {getUserProfileAPI} from "../../api/api";
type ProfileClassContainerType = ProfilePropsType & {
  router: { params: { userId: string } }
}

class ProfileClassContainer extends React.Component<ProfileClassContainerType> {

  componentDidMount() {
    let userId = this.props.router.params.userId
    getUserProfileAPI.getUserProfile(userId).then(data => {
      this.props.setUserProfile(data)
    })
  }

  render() {
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
  }
}

export const ProfileContainer = connect(mapStateToProps,
  {addPost, changeTextPost, setUserProfile})(withRouter(ProfileClassContainer))