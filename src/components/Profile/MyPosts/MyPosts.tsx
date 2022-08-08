import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import {Box} from "@chakra-ui/react";
import {PostType} from "../../../redux/storeTypes";


type MyPostsPropsType = {
  posts: Array<PostType>
}

const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.posts.map(p => <span key={p.id}>{
    <Post id={p.id} message={p.message} likeCount={p.likeCount} photo={p.photo}/>
  }</span>)


  return (<div className={s.content}>
    <Box alignItems={'top'} display={"flex"} flexWrap={'wrap'} justifyContent={'center'}>
      {postsElements}
    </Box>
  </div>)
}

export default MyPosts