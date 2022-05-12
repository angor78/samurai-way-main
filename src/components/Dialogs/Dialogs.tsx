import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

type DialogItemType = {
  name: string
  id: number
}
const DialogItem = (props: DialogItemType) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}
type MessageType = {
  message: string
  id: number
}
const Message = (props: MessageType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = () => {

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

  let messagesElements = messagesData.map(m => <Message message={m.message} id={m.id}/>)
  let dealogesElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dealogesElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>

    </div>
  )
}
export default Dialogs