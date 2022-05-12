import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import {PostType} from "../../../index";


type MyPostsPropsType={
  posts:Array<PostType>
}
const MyPosts = (props:MyPostsPropsType) => {
  let postsElements = props.posts.map(p=><Post id={p.id} message={p.message} likeCount={p.likeCount}/>)
  return (<div className={s.content}>
    <h3>My posts</h3>
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    {postsElements}
  </div>)
}

export default MyPosts