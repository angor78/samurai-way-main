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
  id:number
}
const Message = (props: MessageType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = () => {

  const dialogsData =[
    {id:1, name:"Dimych"},
    {id:2, name:"Andrey"},
    {id:3, name:"Dimych"},
    {id:4, name:"Sveta"},
    {id:5, name:"Katya"},
    {id:6, name:"Frosia"},
  ]
  const messagesData =[
    {id:1, name:"First comment!"},
    {id:2, name:"How are you?"},
    {id:3, name:"Fine!"},
    {id:4, name:"Yo"},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].name} id={messagesData[0].id}/>
        <Message message={messagesData[1].name} id={messagesData[1].id}/>
        <Message message={messagesData[2].name} id={messagesData[2].id}/>
        <Message message={messagesData[3].name} id={messagesData[3].id}/>

      </div>

    </div>
  )
}
export default Dialogs