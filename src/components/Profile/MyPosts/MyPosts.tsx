import React, {ChangeEvent} from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import {
  ActionTypes,
  PostType
} from "../../../redux/store";
import {addPostActionCreator, changeTextPostActionCreator} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
  posts: Array<PostType>
  dispatch: (action: ActionTypes) => void
  newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.posts.map(p => <span key={p.id}>{
    <Post id={p.id} message={p.message} likeCount={p.likeCount}/>
  }</span>)


  const onClickAddPostHandler = () => {
    props.dispatch(addPostActionCreator(props.newPostText))
  }
  const onChangePostHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeTextPostActionCreator(e.currentTarget.value))
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