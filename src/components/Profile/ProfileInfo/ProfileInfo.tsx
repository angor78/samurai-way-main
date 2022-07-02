import React, {ChangeEvent} from "react";
import {Badge, Box, Button, Image, Progress, Textarea} from "@chakra-ui/react";
import {ProfileType} from "../../../redux/storeTypes";

type ProfileInfoType = {
  profile: ProfileType
  newPostText: string
  changePost: (text: string) => void
  addPost: (text: string) => void
}
const ProfileInfo = (props: ProfileInfoType) => {
  const onClickAddPostHandler = () => {
    props.addPost(props.newPostText)
  }
  const onChangePostHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changePost(e.currentTarget.value)
  }
  if(!props.profile){
    return <Progress size='xs' isIndeterminate colorScheme='teal'/>
  }else{
    return (
      <Box textAlign={'center'} maxW={'300'} minW={'300'} float={'right'} p={'10'} pt={'0'}>
        <Box float={'right'}>
          <Textarea placeholder='New post...' onChange={onChangePostHandle} value={props.newPostText}/>
          <Button colorScheme='teal' mt={'5'} mb={'15'} size='sm' onClick={onClickAddPostHandler}>
            Add post
          </Button>
        </Box>
          <Box>
            <Image
              borderRadius='full'
              alt={'1111'}
              src={
                props.profile.photos.large?props.profile.photos.large: 'https://cdn-icons-png.flaticon.com/512/560/560216.png'
              }
            />
          </Box>
          <Box >
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
      </Box>)
  }

}
export default ProfileInfo