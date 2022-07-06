import Header from './Header'

import React from 'react';
import {connect} from "react-redux";
import {initialAuthType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authMeAPI} from "../../api/api";

export class HeaderClassContainer extends React.Component<HeaderClassContainerType> {
  componentDidMount() {
    authMeAPI.authMe().then(data=>this.props.setAuthUserData(data))
  }

  render() {
    return <Header auth={this.props.auth} setAuthUserData={this.props.setAuthUserData}/>
  }
}

type MapStatePropsType = {
  auth: initialAuthType
}
type MapDispatchPropsType = {
  setAuthUserData: (data:any) => void
}
export type HeaderClassContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
  return {auth: state.auth}
}
export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderClassContainer)