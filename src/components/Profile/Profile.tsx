import React from "react";
import "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Center, Wrap, WrapItem} from "@chakra-ui/react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePropsType} from "./ProfileContainer";


const Profile = (props: ProfilePropsType) => {
  return (

      <Wrap spacing='30px' display={"flex"} flexWrap={'wrap'}>
        <WrapItem>
          <Center ml={'20px'} mt={'10px'} display={'flex'} flexDirection={'column'}>
            <ProfileInfo profile={props.profilePage.profile}
                         status={props.status}
                         addPost={props.addPost}
                         updateStatus={props.updateStatus}
                         newPostText={props.profilePage.newTextPost}
                         changePost={props.changeTextPost}/>
          </Center>
        </WrapItem>
        <WrapItem minWidth={'350'}
                  width={'70%'}
                  display={"flex"}
                  overflow='hidden'>
          <MyPosts
            posts={props.profilePage.posts}
          />
        </WrapItem>
    </Wrap>

)

}

export default Profile