import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel, Heading, IconButton,
  Input,
  Select,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import {Image} from '@chakra-ui/react'
import {SearchIcon} from "@chakra-ui/icons";

type Users2Type = UsersPropsType & {
  onPageChanged: (page: number) => void
}
const Users = (props: Users2Type) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <Wrap spacing='30px' display={"flex"} flexWrap={'wrap'}>
      <WrapItem minWidth={'350'}
                width={'70%'}
                display={"flex"}
                overflow='hidden'>
        <Center display={'inline-block'}>
          {props.usersPage.users.map(u =>
            <Box margin={3} borderWidth='1px' borderRadius='lg' overflow={'hidden'} padding={'5'}>
              <Box display='block' alignItems='center' verticalAlign={'middle'} flexDirection={'row'}>
                <Image
                  src={u.photos.small != null ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/560/560216.png'}
                  alt='avatar' boxSize='50px' objectFit='cover' display={'inline-block'}/>
                <Box as='span' color='gray.600' fontSize='lg' p={'5'} display={'inline-block'} verticalAlign={'top'}
                     pt={'5'} pl={'5'}>
                  {u.name}
                </Box>
                <Box float={'right'}>
                  {u.followed ?
                    <Button display={'block'} float={'right'} colorScheme='teal' size='sm'
                            onClick={() => props.unfollow(u.id)}>Unfollow</Button>
                    : <Button colorScheme='blue' size='sm' onClick={() => props.follow(u.id)}>Follow</Button>}
                </Box>
              </Box>

              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  status: {u.status}
                </Badge>
              </Box>
              <Divider orientation='horizontal' mt={'3'} mb={'2'}/>
              <Box>
                <Badge borderRadius='full' px='2' colorScheme='blue'>
                  Description:
                </Badge>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis culpa ducimus est
                iusto libero maxime minima neque nihil, nobis officiis porro praesentium, quis, sapiente similique
                sint
                vel
                voluptatem? Laborum.
              </Box>
              <Divider orientation='horizontal' mt={'3'}/>
              <Box as='span' color='gray.600' fontSize='sm' float={'right'}>
                {"Solar system"}
              </Box>
              <Box as='span' color='gray.600' fontSize='sm' float={'right'}>
                {"The Earth"}/
              </Box>
            </Box>
          )}
        </Center>
      </WrapItem>
      <WrapItem>
        <Center mt={'10px'} display={'flex'} flexDirection={'column'}>
          <FormControl minW={'300'} p={'7'} borderWidth='1px' borderRadius='lg' overflow='hidden'
                       alignItems={'top'}>
            <FormLabel htmlFor='first-name'>Find user...</FormLabel>
            <Input id='first-name' placeholder='Enter name...'/>
            <FormLabel htmlFor='country'>Country</FormLabel>
            <Select id='country' placeholder='Select location'>
              <option>Mars</option>
              <option>Saturn</option>
            </Select>
            <IconButton mt={'5'} float={'right'} aria-label='Search database' icon={<SearchIcon/>}/>
            {props.totalUsersCount}
          </FormControl>
          <Heading size={'sm'} mt={'20'} mb={'30'} color={'gray.500'}>Pages</Heading>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
            <Box>
              {pages.map(p => props.currentPage === p ?
                <Button colorScheme={'teal'}>{p}</Button> :
                <Button onClick={() => props.onPageChanged(p)}>{p}</Button>
              )}
            </Box>
          </Box>
        </Center>
      </WrapItem>
    </Wrap>
  )
}

export default Users