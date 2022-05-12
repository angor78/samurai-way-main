import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

export type PostType = {
  id: number
  message: string
  likeCount: number
}
export type DialogType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  message: string
}

const posts = [
  {id: 1, message: 'Hi, how a yo?', likeCount: 12},
  {id: 2, message: "It's my first yo.", likeCount: 1},
]
const dialogsData = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "Andrey"},
  {id: 3, name: "Dimych"},
  {id: 4, name: "Sveta"},
  {id: 5, name: "Katya"},
  {id: 6, name: "Frosia"},
]
const messagesData = [
  {id: 1, message: "First comment!"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Fine!"},
  {id: 4, message: "Yo"},
]

ReactDOM.render(
  <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);