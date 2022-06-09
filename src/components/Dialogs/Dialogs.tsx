import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {Box, Button, Input} from "@chakra-ui/react";

type DialogsPropsType = {
  dialogsPage: DialogsPageType
  newTextMessage: string
  addMessage: () => void
  changeMessageText: (text: string) => void
}


const Dialogs = (props: DialogsPropsType) => {

  let messagesElements = props.dialogsPage.messagesData.map((m,i) =>
      i % 2 === 0 ?
      <Box key={m.id} textAlign={'left'}>{<Message message={m.message} id={m.id}/>}</Box>
      : <Box key={m.id} textAlign={'right'}>{<Message message={m.message} id={m.id}/>}</Box>
  )

  let dialogsElements = props.dialogsPage.dialogsData.map(d =>
    <Box key={d.id} textAlign={'left'}>
      {<DialogItem name={d.name} id={d.id} avatar={d.avatar}/>}
    </Box>
  )

  const onClickAddMessageHandler = () => {
    props.addMessage()
  }
  const onChangeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.changeMessageText(e.currentTarget.value)
  }
  return (
    <Box display={'flex'}  className={s.dialogs} padding={'100'}>
      <Box display={'block'} >
        {dialogsElements}
      </Box>
      <Box>
        {messagesElements}
        <Box>
          <Input placeholder='New message...' onChange={onChangeMessageHandler}
                    value={props.dialogsPage.newTextMessage} color={'white'}/>
          <Button colorScheme='teal' mt={'5'} mb={'15'} size='sm' onClick={onClickAddMessageHandler}>
            add message
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default Dialogs