import "./Profile.module.css"
import {connect} from "react-redux";
import {
  addPost,
  changeTextPost, getStatus, getUserProfile,
  initialProfileStateType, setUserProfile, updateStatus
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Profile from "./Profile";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type ProfileClassContainerType = ProfilePropsType & {
  router: { params: { userId: string } }
  getUserProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
}

class ProfileClassContainer extends React.Component<ProfileClassContainerType> {

  componentDidMount() {
    let userId = this.props.router.params.userId
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
}


//REACT-REDUX CONNECT
type MapStatePropsType = {
  profilePage: initialProfileStateType
  status: string
}
type MapDispatchPropsType = {
  addPost: () => void
  changeTextPost: (text: string) => void
  setUserProfile: (profile: any) => void
  updateStatus: (status: string) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profilePage: state.profilePage,
    status: state.profilePage.status
  }
}

// export default withAuthRedirect(connect(mapStateToProps,
//   {addPost, changeTextPost, setUserProfile, getUserProfile})
// (withRouter(ProfileClassContainer)))

export default compose<React.ComponentType>(
  connect(mapStateToProps,
    {addPost, changeTextPost, setUserProfile, getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileClassContainer)
