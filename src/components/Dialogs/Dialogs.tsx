import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";

type DialogsPropsType = {
  dialogsPage: DialogsPageType
  newTextMessage: string
  addMessage: () => void
  changeMessageText: (text: string) => void
}


const Dialogs = (props: DialogsPropsType) => {

  let messagesElements = props.dialogsPage.messagesData.map(m =>
    <li key={m.id}>{<Message message={m.message} id={m.id}/>}</li>)

  let dialogsElements = props.dialogsPage.dialogsData.map(d =>
    <span key={d.id}>
            {<DialogItem name={d.name} id={d.id} avatar={d.avatar}/>}
          </span>)

  const onClickAddMessageHandler = () => {
    props.addMessage()
  }
  const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeMessageText(e.currentTarget.value)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <ul>
          {messagesElements}
        </ul>
        <div>
          <textarea onChange={onChangeMessageHandler} value={props.dialogsPage.newTextMessage}/>
          <button onClick={onClickAddMessageHandler}>add message</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs