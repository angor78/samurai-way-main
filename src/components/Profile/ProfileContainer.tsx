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
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";

type ProfileClassContainerType = ProfilePropsType & {
  router: { params: { userId: string } }
  getUserProfile: (userId: string) => void
}

class ProfileClassContainer extends React.Component<ProfileClassContainerType> {

  componentDidMount() {
    let userId = this.props.router.params.userId
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <Profile {...this.props} />
    )
  }
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

// export default withAuthRedirect(connect(mapStateToProps,
//   {addPost, changeTextPost, setUserProfile, getUserProfile})
// (withRouter(ProfileClassContainer)))

export default compose<React.ComponentType> (
  connect(mapStateToProps,
   {addPost, changeTextPost, setUserProfile, getUserProfile}),
  withRouter,
 // withAuthRedirect
)(ProfileClassContainer)
