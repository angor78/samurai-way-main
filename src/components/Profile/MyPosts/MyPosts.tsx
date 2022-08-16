import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import {Center} from "@chakra-ui/react";
import {PostType} from "../../../redux/storeTypes";


type MyPostsPropsType = {
  posts: Array<PostType>
}

const MyPosts = React.memo((props: MyPostsPropsType) => {
  let postsElements = props.posts.map(p => <span key={p.id}>{
    <Post id={p.id} message={p.message} likeCount={p.likeCount} photo={p.photo}/>
  }</span>)


  return (<div className={s.content}>
    <Center display={'flex'} flexWrap={"wrap"}>
      {postsElements}
    </Center>
  </div>)
})

export default MyPosts