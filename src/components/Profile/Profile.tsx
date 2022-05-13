import React from "react";
import "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";



export type ProfilePropsType = {
  profilePage:ProfilePageType
}
const Profile = (props: ProfilePropsType) => {

  return (
    <div className="content">
     <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts} />
    </div>
  )

}

export default Profile