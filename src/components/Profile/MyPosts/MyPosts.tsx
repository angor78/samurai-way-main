import React, {ChangeEvent} from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
  posts: Array<PostType>
  addPost: (textToPost:string) => void
  changeTextPost:(postText:string)=>void
  newPostText:string
}
const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.posts.map(p =><span key={p.id}>{
    <Post id={p.id} message={p.message} likeCount={p.likeCount}/>
  }</span> )


  const onClickAddPostHandler = () => {
    props.addPost(props.newPostText)
  }
  const onChangePostHandle = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.changeTextPost(e.currentTarget.value)
  }
  return (<div className={s.content}>
    <h3>My posts</h3>
    <div>
      <textarea onChange={onChangePostHandle} value={props.newPostText}/>
      <button onClick={onClickAddPostHandler}>Add post</button>
    </div>
    {postsElements}
  </div>)
}

export default MyPosts