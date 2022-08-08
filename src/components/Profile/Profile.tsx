import React from "react";
import "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Box} from "@chakra-ui/react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePropsType} from "./ProfileContainer";


const Profile = (props: ProfilePropsType) => {
  return (
    <Box display={'flex'}>
      <Box float={'left'} mt={'10'}>
        <MyPosts
          posts={props.profilePage.posts}
        />
      </Box>
      <Box maxW={'500'} float={'right'} p={'10'}>
        <ProfileInfo profile={props.profilePage.profile}
                     status={props.status}
                     addPost={props.addPost}
                     updateStatus={props.updateStatus}
                     newPostText={props.profilePage.newTextPost}
                     changePost={props.changeTextPost}/>
      </Box>
    </Box>

  )

}

export default Profile