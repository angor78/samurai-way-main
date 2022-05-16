import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
  posts: Array<PostType>
  addPost: (newTextToPost: string) => void
}
const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

  const newPostRef = React.createRef<HTMLTextAreaElement>()

  const onClickAddPostHandler = () => {
    const newTextToPost = newPostRef.current ? newPostRef.current.value : ''
    props.addPost(newTextToPost)
  }
  return (<div className={s.content}>
    <h3>My posts</h3>
    <div>
      <textarea ref={newPostRef}></textarea>
      <button onClick={onClickAddPostHandler}>Add post</button>
    </div>
    {postsElements}
  </div>)
}

export default MyPosts