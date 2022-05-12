import React from "react";
import "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";



export type ProfilePropsType = {
  posts:Array<PostType>
}
const Profile = (props: ProfilePropsType) => {

  return (
    <div className="content">
     <ProfileInfo/>
      <MyPosts posts={props.posts} />
    </div>
  )

}

export default Profile