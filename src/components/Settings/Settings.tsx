import React from "react";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {addPost, changeTextPost, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {Badge, Box, Heading, Input} from "@chakra-ui/react";

const Settings = () => {
  const profile = useSelector<any, any>(state => state.profilePage.profile)
  const status = useSelector<any, any>(state => state.profilePage.status)
  const newTextPost = useSelector<any, any>(state => state.profilePage.newTextPost)
  const dispatch = useDispatch<any>()


  const onChangeHandler = (e: any) => {
    if (e.currentTarget.files.length === 1) {
      dispatch(savePhoto(e.currentTarget.files[0]))
    }
  }

  return (
    <Box display={'flex'} flexDirection={'column'} mt={'10'} alignItems={'center'}>
      <Heading display={'block'} mb={'30'}>Settings</Heading>
      <Box display={'flex'} justifyContent={'center'} alignItems={'start'}>
        <ProfileInfo profile={profile}
                     status={status}
                     addPost={dispatch(addPost)}
                     updateStatus={dispatch(updateStatus)}
                     newPostText={newTextPost}
                     changePost={dispatch(changeTextPost)}
        />
        <Box>
          <Badge colorScheme={'purple'} p={'5px'}>Change Photo</Badge>
          <Input type={'file'} onChange={onChangeHandler}/>
        </Box>
      </Box>
    </Box>
  )
}
export default Settings