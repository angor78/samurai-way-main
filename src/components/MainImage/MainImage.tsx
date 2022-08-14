import React from 'react';
import s from './MainImage.module.css'
import {Box, Button} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

export const MainImage = () => {
  return (
      <Box className={s.image} display={'flex'}  flexDirection={'column'} justifyContent={'center'}>
        <Box className={s.titleText} color={'whiteAlpha.900'} textAlign={'center'}>
          <Box className={s.heading}>
            Welcome to community
          </Box>
          <Box className={s.subHeading}>it-incubator</Box>
          <Box className={s.text} p={'200'} paddingTop={0} paddingBottom={20}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur eaque ipsa itaque magni
            odio quas qui quibusdam quod ratione rem soluta sunt tenetur, vitae voluptatem. Accusamus asperiores aut
            sit.
          </Box>
          <Box className={s.buttonsBlock} display={'flex'} flexDirection={'row'} justifyContent={"center"} gap={'20px'}>
            <Button colorScheme='blue' size='lg'>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/samurai-way-main/profile/19509"}>See Posts</NavLink>
            </Button>
            <Button colorScheme='blue' size='lg'>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/users"}>See Members</NavLink>
            </Button>
          </Box>
        </Box>

      </Box>

  )
}