import React from 'react';
import {NavLink} from "react-router-dom";
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {Text} from '@chakra-ui/react'
import {
  Box,
  Button, Flex, Heading,
  HStack,
  IconButton,
  Stack, useDisclosure
} from "@chakra-ui/react";
import s from './Header.module.css'
import {initialAuthType} from "../../redux/auth-reducer";

type HeaderPropsType = {
  auth: initialAuthType
  logout: () => void
}

export default function Header(props: HeaderPropsType) {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Box bg={'black'} px={4} color={'whiteAlpha.600'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
            aria-label={'Open Menu'}
            display={{md: 'none'}}
            onClick={isOpen ? onClose : onOpen}
            colorScheme='blue'
            fontSize='20px'
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box className={s.titleHead}>
              <Heading size='lg' fontSize='28px' color={"blue.200"}>
                <NavLink className={s.Navlink} to={"/samurai-way-main/"}>SamuraiWay</NavLink>
              </Heading>
              <Text className={s.textSpan} fontSize='xs' color={'whiteAlpha.600'} letterSpacing='2px'>social-net by angor78</Text>
            </Box>
            <HStack
              as={'nav'}
              spacing={6}
              display={{base: 'none', md: 'flex'}}>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/samurai-way-main/profile/" + props.auth.id}>Profile</NavLink>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/users"}>Users</NavLink>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/dialogs"}>Messages</NavLink>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/news"}>News</NavLink>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/music"}>Musik</NavLink>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/settings"}>Settings</NavLink>
            </HStack>
          </HStack>
          <Box>
            {props.auth.isAuth ?
              <Box>
                <Box color={'#90CDF4'} textAlign={'center'}>{props.auth.login}</Box>
                <Button onClick={props.logout} ml={'3'} mr={'3'} size={'s'} colorScheme={'red'} p={'1'}>
                  Logout
                </Button>
              </Box>:
              <Box>
                <Button ml={'3'} mr={'3'} size={'s'} colorScheme={'red'} p={'1'}>
                  <NavLink to={'/login'}>Login</NavLink>
                </Button>
              </Box>
            }
          </Box>

        </Flex>
        {isOpen ? (
          <Box pb={4} display={{md: 'none'}}>
            <Stack as={'nav'} spacing={4}>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/samurai-way-main/profile/" + props.auth.id}>Profile</NavLink>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/users"}>Users</NavLink>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/dialogs"}>Messages</NavLink>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/news"}>News</NavLink>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/music"}>Musik</NavLink>
              <NavLink className={s.Navlink} style={({isActive}) => ({
                color: isActive ? "#90CDF4" : '',
              })} to={"/settings"}>Settings</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
