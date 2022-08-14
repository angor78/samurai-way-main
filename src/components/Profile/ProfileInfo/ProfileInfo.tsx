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
      <Box minW={'300'} p={'7'} borderWidth='1px' borderRadius='lg' overflow='hidden'
           alignItems={'top'}>
        <Box>
          <Box borderWidth='1px' borderRadius='lg' p={'5'} maxW={'420px'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Badge borderRadius='full' px='5' colorScheme='red' mb={'3'} maxW={'400px'}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} userId={props.profile.userId}/>
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
          <Textarea mt={'15'} placeholder='New post...' onChange={onChangePostHandle} value={props.newPostText}/>
          <Button colorScheme='teal' mt={'15'} mb={'5'} size='sm' onClick={onClickAddPostHandler}>
            Add post
          </Button>
        </Box>
      </Box>)
  }

}
export default ProfileInfo

