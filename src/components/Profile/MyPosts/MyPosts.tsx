import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"

const MyPosts = () => {
  const postsData = [
    {id: 1, message: 'Hi, how a yo?', likeCount: 12},
    {id: 2, message: "It's my first yo.", likeCount: 1},

  ]

  return (<div className={s.content}>
    <h3>My posts</h3>
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
    <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
  </div>)
}

export default MyPosts