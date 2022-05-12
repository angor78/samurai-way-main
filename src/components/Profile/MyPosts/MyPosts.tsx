import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"

const MyPosts = () => {
  const posts = [
    {id: 1, message: 'Hi, how a yo?', likeCount: 12},
    {id: 2, message: "It's my first yo.", likeCount: 1},
  ]

 let postsElements = posts.map(p=><Post message={p.message} likeCount={p.likeCount}/>)
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