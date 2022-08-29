import React from 'react';
import {
  Badge,
  Box,
  Button,
  Divider,
} from "@chakra-ui/react";
import {Image} from '@chakra-ui/react'
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";


type UserPropsType = {
  user: UserType
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  following: boolean
}

export const User = React.memo((props: UserPropsType) => {
  return <Box key={props.user.id} margin={3} borderWidth='1px' borderRadius='lg' overflow={'hidden'} padding={'5'} >
    <Box display='block' alignItems='center' verticalAlign={'middle'} flexDirection={'row'}>
      <NavLink to={'/profile/' + props.user.id}>
        <Image
          src={props.user.photos.small != null ? props.user.photos.small : 'https://cdn-icons-png.flaticon.com/512/560/560216.png'}
          alt='avatar' boxSize='50px' objectFit='cover' display={'inline-block'}/>
        <Box as='span' color='gray.600' fontSize='lg' p={'5'} display={'inline-block'} verticalAlign={'top'}
             pt={'5'} pl={'5'}>
          {props.user.name}
        </Box>
      </NavLink>
      <Box float={'right'}>
        {props.user.followed ?
          <Button display={'block'} float={'right'} colorScheme='teal' size='sm'
                  disabled={props.following}
                  onClick={() => props.unfollow(props.user.id)}>Unfollow</Button>
          : <Button colorScheme='blue' size='sm'
                    disabled={props.following}
                    onClick={() => props.follow(props.user.id)}>Follow</Button>}
      </Box>
    </Box>

    <Box display='flex' alignItems='baseline'>
      <Badge borderRadius='full' px='2' colorScheme='teal'>
        status: {props.user.status}
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
})