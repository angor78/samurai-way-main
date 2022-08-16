import {addPost, deletePost, profileReducer} from "./profile-reducer";
import {v1} from "uuid";
import img1 from "../images/posts-images/1.jpeg";
import img2 from "../images/posts-images/2.jpg";
import img3 from "../images/posts-images/3.jpg";
import img4 from "../images/posts-images/4.png";
import {PostType} from "./storeTypes";

let startState = {
  profile: null,
  newTextPost: '',
  posts: [
    {id: v1(), message: "It's my first yo.", likeCount: 1, photo: img1},
    {id: v1(), message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likeCount: 1, photo: img2},

    {id: v1(), message: "It's my first yo.", likeCount: 1, photo: img3},
    {
      id: v1(),
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad assumenda at consequatur cumque dolore eius est ipsam iure magnam magni, nihil placeat quia quibusdam, quis, temporibus voluptatem. Accusantium, quos?\n',
      likeCount: 12, photo: img4
    },

  ] as Array<PostType>,
  status: ''
}

it('should be add new post', () => {

    let action = addPost('Hello')
    let endState = profileReducer(startState, action)
    expect(endState.posts.length).toBe(5)
  }
)

it('name of added post should be correct', () => {

    let action = addPost('Hello')
    let endState = profileReducer(startState, action)
    expect(endState.posts[0].message).toBe('Hello')
  }
)

it('post should be delete', () => {
    let action = deletePost('1')
    let endState = profileReducer(startState, action)
    expect(endState.posts.length).toBe(4)
  }
)
