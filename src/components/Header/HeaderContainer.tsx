import Header from './Header'

import React from 'react';
import {connect} from "react-redux";
import {authMe, initialAuthType,setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


export class HeaderClassContainer extends React.Component<HeaderClassContainerType> {
  componentDidMount() {
    this.props.authMe()
  }

  render() {
    return <Header auth={this.props.auth}
                   setAuthUserData={this.props.setAuthUserData}
    />
  }
}

type MapStatePropsType = {
  auth: initialAuthType
}
type MapDispatchPropsType = {
  setAuthUserData: (id: number, email: string, login: string, isAuth: boolean) => void
  authMe: () => void
}
export type HeaderClassContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
  return {auth: state.auth}
}
export const HeaderContainer = connect(mapStateToProps, {setAuthUserData, authMe})(HeaderClassContainer)