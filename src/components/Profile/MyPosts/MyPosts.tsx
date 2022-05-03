import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"

const MyPosts = () => {
  return (<div className={s.content}>
    <h3>My posts</h3>
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <Post message='Hi, how a yo?' likeCount={6}/>
    <Post message="It's my first yo." likeCount={7}/>

  </div>)
}

export default MyPosts