import React, {ChangeEvent, useState} from 'react';
import {Box, Input} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
  userId: number
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  let authUserId = useSelector<AppStateType, number>(state => state.auth.id)

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <Box>
      {props.userId === authUserId && editMode
        ?
        <Box>
          <Input autoFocus={true}
                 value={status}
                 onChange={onChangeHandler}
                 onBlur={deactivateEditMode}
                 size='xs'
                 focusBorderColor='red.400'
          />
        </Box>
        :
        <Box>
          <div onClick={activateEditMode}>{props.status}</div>
        </Box>}
    </Box>

  )


}