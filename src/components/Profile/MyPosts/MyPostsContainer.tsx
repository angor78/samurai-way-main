import React from "react";
import {
  StoreType
} from "../../../redux/store";
import MyPosts from "./MyPosts";


type MyPostsContainerPropsType = {
  store: StoreType
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
  let state = props.store.getState()
  return <MyPosts posts={state.profilePage.posts}/>
}

export default MyPostsContainer