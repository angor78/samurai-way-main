import React from "react";
import "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
  ActionTypes,
  ProfilePageType
} from "../../redux/store";


export type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionTypes) => void
  newPostText: string
}
const Profile = (props: ProfilePropsType) => {

  return (
    <div className="content">
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               dispatch={props.dispatch}
               newPostText={props.newPostText}
      />
    </div>
  )

}

export default Profile