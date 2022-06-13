import "./Profile.module.css"
import {connect} from "react-redux";
import Profile from "./Profile";
import {addPostActionCreator, changeTextPostActionCreator, initialProfileStateType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


//REACT-REDUX CONNECT
type MapStatePropsType = {
  profilePage: initialProfileStateType
}
type MapDispatchPropsType = {
  addPost: () => void
  changePost: (text: string) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    changePost: (text: string) => {
      dispatch(changeTextPostActionCreator(text))
    }
  }
}
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)