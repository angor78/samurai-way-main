import Header from './Header'

import React from 'react';
import {connect} from "react-redux";
import {initialAuthType, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


export class HeaderClassContainer extends React.Component<HeaderClassContainerType> {


  render() {
    return <Header auth={this.props.auth}
                   logout={this.props.logout}
    />
  }
}

type MapStatePropsType = {
  auth: initialAuthType
}
type MapDispatchPropsType = {
  logout: () => void
}
export type HeaderClassContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
  return {auth: state.auth}
}
export const HeaderContainer = connect(mapStateToProps, {logout})(HeaderClassContainer)