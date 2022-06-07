import React from "react";
import "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/store";


export type ProfilePropsType = {
  store: StoreType
}
const Profile = (props: ProfilePropsType) => {

  return (
    <div className="content">
      <ProfileInfo/>
      <MyPostsContainer
               // posts={props.profilePage.posts}
               // dispatch={props.dispatch}
               // newPostText={props.newPostText}
        store={props.store}
      />
    </div>
  )

}

export default Profile