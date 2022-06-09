import React from 'react';
import {NavLink} from "react-router-dom";
import {HamburgerIcon, CloseIcon,ExternalLinkIcon} from '@chakra-ui/icons';
import { Text} from '@chakra-ui/react'
import {
  Avatar,
  Box,
  Button, Flex, Heading,
  HStack,
  IconButton, Link, Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack, useDisclosure
} from "@chakra-ui/react";
import s from './HeaderWithActionType.module.css'

export default function HeaderWithAction() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Box bg={'black'} px={4}  color={'whiteAlpha.600'} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
            aria-label={'Open Menu'}
            display={{md: 'none'}}
            onClick={isOpen ? onClose : onOpen}
            // variant='outline'
            colorScheme='blue'
            fontSize='20px'
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading size='lg' fontSize='28px' color={"blue.200"}>
                <NavLink className={s.Navlink} to={"/main"}>SamuraiWay</NavLink>
              </Heading>
              <Text fontSize='xs' color={'whiteAlpha.600'} letterSpacing='2px'>social-net by angor78</Text>
            </Box>
            <HStack
              as={'nav'}
              spacing={6}
              display={{base: 'none', md: 'flex'}}>
              <NavLink className={s.Navlink} to={"/profile"}>Profile</NavLink>
              <NavLink className={s.Navlink} to={"/dialogs"}>Messages</NavLink>
              <NavLink className={s.Navlink} to={"/news"}>News</NavLink>
              <NavLink className={s.Navlink} to={"/music"}>Musik</NavLink>
              <NavLink className={s.Navlink} to={"/settings"}>Settings</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://avatars.githubusercontent.com/u/15981680?s=400&u=c777ec047d344fe8a7f933de75e3e3db39f78841&v=4'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href='https://github.com/angor78' isExternal>
                    GIT <ExternalLinkIcon mx='2px'/>
                  </Link>
                </MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider/>
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{md: 'none'}}>
            <Stack as={'nav'} spacing={4}>
              <NavLink to={"/profile"}>Profile</NavLink>
              <NavLink to={"/dialogs"}>Messages</NavLink>
              <NavLink to={"/news"}>News</NavLink>
              <NavLink to={"/music"}>Musik</NavLink>
              <NavLink to={"/settings"}>Settings</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}