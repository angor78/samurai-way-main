import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
  dialogsPage: DialogsPageType
  addMessage:(newTextToMessage:string)=>void
}


const Dialogs = (props: DialogsPropsType) => {

  let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id}/>)
  let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)

  const newMessageRef=React.createRef<HTMLTextAreaElement>()
  const onClickAddMessageHandler = () => {
    props.addMessage(newMessageRef.current?newMessageRef.current.value:'')
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessageRef}></textarea>
          <button onClick={onClickAddMessageHandler}>add message</button>
        </div>
      </div>

    </div>
  )
}
export default Dialogs