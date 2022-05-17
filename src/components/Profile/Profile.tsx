import React from "react";
import "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";



export type ProfilePropsType = {
  profilePage:ProfilePageType
  addPost: (textToPost:string) => void
  changeTextPost:(postText:string)=>void
  newPostText:string
}
const Profile = (props: ProfilePropsType) => {

  return (
    <div className="content">
     <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               addPost={props.addPost}
               changeTextPost={props.changeTextPost}
               newPostText={props.newPostText}/>
    </div>
  )

}

export default Profile