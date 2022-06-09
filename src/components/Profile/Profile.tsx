import React from "react";
import "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/store";
import {Box} from "@chakra-ui/react";
import {addPostActionCreator, changeTextPostActionCreator} from "../../redux/profile-reducer";


export type ProfilePropsType = {
  store: StoreType
}
const Profile = (props: ProfilePropsType) => {
  let state = props.store.getState()
  const onClickAddPostHandler = () => {
    props.store.dispatch(addPostActionCreator(state.profilePage.newTextPost))
  }
  const onChangePostHandle = (text: string) => {
    props.store.dispatch(changeTextPostActionCreator(text))
  }
  return (
    <Box display={'flex'}>
      <Box float={'left'}>
        <MyPostsContainer
          // posts={props.profilePage.posts}
          // dispatch={props.dispatch}
          // newPostText={props.newPostText}
          store={props.store}
        />
      </Box>
      <Box maxW={'300'} float={'right'} p={'10'}>
        <ProfileInfo addPost={onClickAddPostHandler}
                     newPostText={state.profilePage.newTextPost}
                     changePost={onChangePostHandle}/>
      </Box>
    </Box>

  )

}

export default Profile