import {useParams} from "react-router-dom";
import React from "react";
import {ProfilePropsType} from "../components/Profile/ProfileContainer";


export function withRouter(Component: any) {
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