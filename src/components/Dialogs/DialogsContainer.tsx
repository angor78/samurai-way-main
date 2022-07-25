import {addMessageActionCreator, InitialStateType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import React from "react";

//REACT-REDUX CONNECT
type MapStatePropsType = {
  dialogsPage: InitialStateType
  isAuth:boolean
}
type MapDispatchPropsType = {
  addMessage: (value:string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addMessage: (value:string) => {
      dispatch(addMessageActionCreator(value))
    }
  }
}

// export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default compose<React.ComponentType> (
  connect(mapStateToProps, mapDispatchToProps),
 // withAuthRedirect
)(Dialogs)