import React from "react";

import { StoreType} from "../../redux/store";
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsContainerPropsType = {
  store: StoreType
}


const DialogsContainer = (props: DialogsContainerPropsType) => {
  let state = props.store.getState()

  const onClickAddMessageHandler = () => {
    props.store.dispatch(addMessageActionCreator(state.dialogsPage.newTextMessage))
  }
  const onChangeMessageHandler = (text:string) => {
    props.store.dispatch(changeTextMessageActionCreator(text))
  }
  return <Dialogs dialogsPage={state.dialogsPage}
                  addMessage={onClickAddMessageHandler}
                  changeMessageText={onChangeMessageHandler}
                  newTextMessage={state.dialogsPage.newTextMessage}/>
}
export default DialogsContainer