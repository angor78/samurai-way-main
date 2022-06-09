import React, {ChangeEvent} from "react";
import {Box, Button, Image, Textarea} from "@chakra-ui/react";
import {Text} from '@chakra-ui/react'

type ProfileInfoType = {
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
  return (
    <Box textAlign={'center'}>
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
            'https://avatars.githubusercontent.com/u/15981680?s=400&u=c777ec047d344fe8a7f933de75e3e3db39f78841&v=4'
          }
        />
      </Box>
      <Box>
        <Text fontSize='1xl' mt={'5'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur eaque ipsa itaque magni
          odio quas qui quibusdam quod ratione rem soluta sunt tenetur, vitae voluptatem. Accusamus asperiores aut
          sit.
        </Text>
      </Box>
    </Box>)
}
export default ProfileInfo