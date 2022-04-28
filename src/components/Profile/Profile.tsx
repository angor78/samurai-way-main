import React from "react";
import "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
  return (
    <div className="content">
      <div>Ava+description</div>
      <MyPosts/>
    </div>
  )
}

export default Profile