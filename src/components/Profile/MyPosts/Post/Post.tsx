import s from "../MyPosts.module.css";
import React from "react";
import {PostType} from "../../../../redux/store";

const Post:React.FC<PostType> = (props) => {
  return (<div className={s.posts}>

    <div className={s.post}><img
      src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612252010_47-p-samurai-na-fioletovom-fone-78.jpg"
      alt="ava"/>{props.message}
      <div>likes: {props.likeCount}</div>
    </div>

  </div>)
}
export default Post