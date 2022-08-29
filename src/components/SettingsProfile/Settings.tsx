import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {savePhoto, updateAboutMe, updateName} from "../../redux/profile-reducer";
import {Badge, Box, Button, Heading, Image, Input} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

export const Settings = () => {
  const profile = useSelector<any, any>(state => state.profilePage.profile)
  const photo = useSelector<any, any>(state => state.profilePage.profile.photos.large)
  const authUserId = useSelector<any, any>(state => state.auth.id)
  const dispatch = useDispatch<any>()
  const [fullname, setFullname] = useState(profile.fullName)
  const [aboutMe, setAboutMe] = useState(profile.aboutMe)

  const changeFullName = () => {
    dispatch(updateName(fullname))
  }
  const changeAboutMe = () => {
    dispatch(updateAboutMe(aboutMe))
  }
  const onChangeHandler = (e: any) => {
    if (e.currentTarget.files.length === 1) {
      dispatch(savePhoto(e.currentTarget.files[0]))
    }
  }

  return (
    <Box display={'flex'} flexDirection={'column'} mt={'10'} alignItems={'center'}>
      <Heading display={'block'} mb={'30'}>Settings</Heading>
      <Button colorScheme={'green'} mb={'5'} size={'sm'}>
        <NavLink to={'/profile/' + authUserId}>
          Apply</NavLink>
      </Button>
      <Box border={'1px'} p={'5'} borderColor={'#EDF2F7'}>
        {}
        <Badge colorScheme={'purple'} p={'5px'}>Change Photo</Badge>
        <Box display={'flex'} border={'1px'} p={'5'} borderColor={'#EDF2F7'}>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Image src={photo} w={'20'} mr={'5'}/>
            <Input type={'file'} onChange={onChangeHandler} border={'none'}/>
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={"end"} mt={'10'} mb={'5'}>
          <Badge colorScheme={'purple'} p={'5px'} w={'20%'}>Name</Badge>
          <Input onChange={(e: ChangeEvent<HTMLInputElement>) => setFullname(e.currentTarget.value)} value={fullname}
                 w={'300px'}/>
          <Button onClick={changeFullName}>Change</Button>
        </Box>
        <Box display={'flex'} justifyContent={"end"}>
          <Badge colorScheme={'purple'} p={'5px'} w={'20%'}>About me</Badge>
          <Input onChange={(e: ChangeEvent<HTMLInputElement>) => setAboutMe(e.currentTarget.value)} value={aboutMe}
                 w={'300px'} justifyContent={"end"}/>
          <Button onClick={changeAboutMe}>Change</Button>
        </Box>
      </Box>
    </Box>
  )
}
