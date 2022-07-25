import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Box, Button, Input} from "@chakra-ui/react";
import {DialogsPropsType} from "./DialogsContainer";
import {FormikProps, withFormik} from "formik";


const Dialogs = (props: DialogsPropsType) => {

  let messagesElements = props.dialogsPage.messagesData.map((m, i) =>

    i % 2 === 0 ?
      <Box key={m.id} textAlign={'left'}>{<Message message={m.message} id={m.id}/>}</Box>
      : <Box key={m.id} textAlign={'right'}>{<Message message={m.message} id={m.id}/>}</Box>
  )

  let dialogsElements = props.dialogsPage.dialogsData.map((d,i) =>
    <Box key={d.id} textAlign={'left'} bg={'teal'}>
      {<DialogItem name={d.name} id={d.id} avatar={d.avatar}/>}
    </Box>
  )

  const addNewMessage = (value: string) => {
    props.addMessage(value)
  }
  // const onChangeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   props.changeMessageText(e.currentTarget.value)
  // }

  return (
    <Box display={'flex'} className={s.dialogs}>
      <Box display={'block'}>
        {dialogsElements}
      </Box>
      <Box>
        {messagesElements}
        <AddMessageForm addNewMessage={addNewMessage}/>
      </Box>
    </Box>
  )
}
export default Dialogs


interface FormValues {
  newTextMessage: string
}

interface OtherProps {
  title?: string;
}

interface MyFormProps {
  initialNewTextMessage?: string;
  addNewMessage: (value: string) => void
}

const AddMessageInnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    title
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder='New message...'
             onChange={handleChange}
             type={'text'}
             name={'newTextMessage'}
             value={values.newTextMessage}
             color={'teal'}/>
      <Button type="submit"
              colorScheme='teal'
              mt={'5'}
              mb={'15'}
              size='sm'>
        add message
      </Button>
    </form>
  )
}


export const AddMessageForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    newTextMessage: props.initialNewTextMessage || "",
  }),
  handleSubmit({newTextMessage}: FormValues, {props, setSubmitting, setErrors}) {
    props.addNewMessage(newTextMessage)
    setSubmitting(false)
  }
})(AddMessageInnerForm)