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
}
const Message = (props: MessageType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name="Dimych" id={1}/>
        <DialogItem name="Andrey" id={2}/>
        <DialogItem name="Sveta" id={3}/>
        <DialogItem name="Katya" id={4}/>
        <DialogItem name="Frosia" id={5}/>
      </div>
      <div className={s.messages}>
        <Message message={"First comment!"}/>
        <Message message={"How are you?"}/>
        <Message message={"Fine!"}/>
        <Message message={"Yo"}/>
      </div>

    </div>
  )
}
export default Dialogs