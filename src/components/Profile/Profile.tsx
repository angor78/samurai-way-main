import React from "react";
import "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

export type ProfilePropsType = {}
const Profile = (props: ProfilePropsType) => {
  return (
    <div className="content">
      <div>Ava+description</div>
      <MyPosts/>
    </div>
  )
}

export default Profile