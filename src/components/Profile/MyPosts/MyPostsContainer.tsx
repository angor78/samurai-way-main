import React from "react";
import {
  StoreType
} from "../../../redux/store";
import {addPostActionCreator, changeTextPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type MyPostsContainerPropsType = {
  store: StoreType
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
  let state = props.store.getState()
  const onClickAddPostHandler = () => {
    props.store.dispatch(addPostActionCreator(state.profilePage.newTextPost))
  }
  const onChangePostHandle = (text: string) => {
    props.store.dispatch(changeTextPostActionCreator(text))
  }
  return <MyPosts posts={state.profilePage.posts}
                  addPost={onClickAddPostHandler}
                  newPostText={state.profilePage.newTextPost}
                  changePost={onChangePostHandle}
  />
}

export default MyPostsContainer