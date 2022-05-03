import React from "react";
import "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType = {}
const Profile = (props: ProfilePropsType) => {
  return (
    <div className="content">
     <ProfileInfo/>
      <MyPosts/>
    </div>
  )
}

export default Profile