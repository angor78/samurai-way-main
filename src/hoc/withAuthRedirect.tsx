import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  type RedirectComponentPropsType = {
    isAuth: boolean
  }
  const mapStateToProps = (state: AppStateType): RedirectComponentPropsType => {
    return {
      isAuth: state.auth.isAuth
    }
  }
  const RedirectComponent = (props: RedirectComponentPropsType) => {
    let {isAuth, ...restProps} = props
    if (!isAuth) {
      return <Navigate to={'/login'}/>
    }
    return <Component  {...restProps as T}/>
  }

  return connect(mapStateToProps)(RedirectComponent)
}