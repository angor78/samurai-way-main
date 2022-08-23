import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {
  Box,
  Center,
  FormControl,
  FormLabel, Heading, IconButton,
  Input, Progress,
  Select,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {User} from "./User";
import {UserType} from "../../redux/users-reducer";
import Paginator from '../../common/Paginator';

type UsersType = UsersPropsType & {
  onPageChanged: (page: number) => void
  users: Array<UserType>
}


const Users = (props: UsersType) => {

  return (
    <Wrap spacing='30px' display={"flex"} flexWrap={'wrap'}>
      <WrapItem>
        <Center ml={'20px'} mt={'10px'} display={'flex'} flexDirection={'column'}>
          <FormControl minW={'300'}
                       p={'7'}
                       borderWidth='1px'
                       borderRadius='lg'
                       overflow='hidden'
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
          11
          <Heading size={'sm'} mt={'20'} mb={'30'} color={'gray.500'}>Pages</Heading>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
            <Paginator totalUsersCount={props.totalUsersCount}
                       currentPage={props.currentPage}
                       pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged}
            />
            {props.isFetching ? <Progress size='xs' isIndeterminate colorScheme='teal'/> : null}
          </Box>
        </Center>
      </WrapItem>
      <WrapItem minWidth={'350'}
                width={'70%'}
                display={"flex"}
                overflow='hidden'>
        <Center display={'inline-block'}>
          {props.users.map(u =>
            <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} following={props.following}/>
          )}
        </Center>
      </WrapItem>
    </Wrap>
  )
}
export default Users

