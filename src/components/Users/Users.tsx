import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {Badge, Box, Button, Center, Divider, FormControl, FormLabel, Input, Select} from "@chakra-ui/react";
import {Image} from '@chakra-ui/react'


export const Users = (props: UsersPropsType) => {

  return (
    <Center>

      <Box display={'flex'} p={'10'} overflow={'hidden'} alignItems={'top'} flexWrap={'wrap'} justifyContent={'center'}>
        {props.usersPage.users.map(u =>
          <Box margin={3} minWidth={'200'} borderWidth='1px' borderRadius='lg' overflow={'hidden'} padding={'5px 10px'}>
            <Box display='flex' alignItems='center' flexDirection={'row'}>
              <Image src={u.photoUrl} alt='Dan Abramov' boxSize='50px' objectFit='cover' display={'inline-block'}/>
              <Box as='span' color='gray.600' fontSize='lg' p={'5'}>
                {u.fullName}
              </Box>
              <Box>
                {u.followed ?
                  <Button colorScheme='teal' size='sm' onClick={() => props.unfollow(u.id)}>Unfollow</Button>
                  : <Button colorScheme='blue' size='sm' onClick={() => props.follow(u.id)}>Follow</Button>}
              </Box>
            </Box>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                status: {u.status}
              </Badge>
            </Box>
            <Box>
              Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis culpa ducimus est
              iusto libero maxime minima neque nihil, nobis officiis porro praesentium, quis, sapiente similique sint
              vel
              voluptatem? Laborum.
            </Box>
            <Divider orientation='horizontal' mt={'3'}/>
            <Box as='span' color='gray.600' fontSize='sm' float={'right'}>
              {u.location.city}
            </Box>
          </Box>
        )}
      </Box>
      <FormControl minW={'300'} p={'7'} borderWidth='1px' borderRadius='lg' overflow='hidden' mr={10} alignItems={'top'}>
        <FormLabel htmlFor='first-name'>Find user...</FormLabel>
        <Input id='first-name' placeholder='Find user...'/>
        <FormLabel htmlFor='country'>Country</FormLabel>
        <Select id='country' placeholder='Select country'>
          <option>Russia</option>
          <option>Belarus</option>
        </Select>
      </FormControl>
    </Center>
  )
}


// <header>
// <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture"
//        className="profile-thumbnail">
//     <div className="profile-name">
//       <h3>Quincy Larson</h3>
//       <h4>@ossia</h4>
//     </div>
//     <div className="follow-btn">
//       <button>Follow</button>
//     </div>
// </header>
// <div id="inner">
//   <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart,
//     you still have to work hard.</p>
//   <span className="date">1:32 PM - 12 Jan 2018</span>
//   <hr>
// </div>
// <footer>
//   <div className="stats">
//     <div className="Retweets">
//       <strong>107</strong> Retweets
//     </div>
//     <div className="likes">
//       <strong>431</strong> Likes
//     </div>
//   </div>
//   <div className="cta">
//     <button className="share-btn">Share</button>
//     <button className="retweet-btn">Retweet</button>
//     <button className="like-btn">Like</button>
//   </div>
// </footer>