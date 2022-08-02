import React, {ChangeEvent} from "react";
import {Badge, Box, Button, CircularProgress, Image, Textarea} from "@chakra-ui/react";
import {ProfileType} from "../../../redux/storeTypes";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
  profile: ProfileType
  newPostText: string
  changePost: (text: string) => void
  addPost: (text: string) => void
  updateStatus: (status: string) => void
  status: string
}
const ProfileInfo = (props: ProfileInfoType) => {
  const onClickAddPostHandler = () => {
    props.addPost(props.newPostText)
  }
  const onChangePostHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changePost(e.currentTarget.value)
  }
  if (!props.profile) {
    return <Box width={'100%'} textAlign={'center'}>
      <CircularProgress isIndeterminate color='teal.300' size='220px'/>
    </Box>
  } else {
    return (
      <Box textAlign={'center'} maxW={'300'} minW={'300'} float={'right'} p={'10'} pt={'0'}>
        <Box float={'right'}>
          <Textarea placeholder='New post...' onChange={onChangePostHandle} value={props.newPostText}/>
          <Button colorScheme='teal' mt={'5'} mb={'15'} size='sm' onClick={onClickAddPostHandler}>
            Add post
          </Button>
          <Box borderWidth='1px' borderRadius='lg' p={'5'} maxW={'220px'}>
            <Box>
              <Badge borderRadius='full' px='5' colorScheme='red' mb={'3'} maxW={'200px'}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
              </Badge>
              <Box>
                <Image
                  borderRadius='full'
                  alt={'1111'}
                  src={
                    props.profile.photos.large ? props.profile.photos.large : 'https://cdn-icons-png.flaticon.com/512/560/560216.png'
                  }
                />
              </Box>

              <Box>
                <Badge borderRadius='full' px='5' colorScheme='blue'>
                  Name: {props.profile.fullName}
                </Badge>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  About me: {props.profile.aboutMe}
                </Badge>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  userId: {props.profile.userId}
                </Badge>
                <Badge borderRadius='full' px='2' colorScheme='blue'>
                  Github: {props.profile.contacts.github}
                </Badge>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>)
  }

}
export default ProfileInfo

