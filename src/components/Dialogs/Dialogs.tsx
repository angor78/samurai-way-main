import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../index";

type DialogsPropsType ={
  dialogsData:Array<DialogType>
  messagesData:Array<MessageType>
}


const Dialogs = (props:DialogsPropsType) => {

  let messagesElements = props.messagesData.map(m => <Message message={m.message} id={m.id}/>)
  let dealogesElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

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