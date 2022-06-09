import React from 'react';
import s from './MainImage.module.css'
import {Button, Stack} from "@chakra-ui/react";
import {Text} from '@chakra-ui/react'

export const MainImage = () => {
  return (
    <div className={s.image}>
      <Stack spacing={3} color={'whiteAlpha.900'} textAlign={'center'}>
        <Text fontSize='6xl' marginTop={'100'}>Welcome to community</Text>
        <Text fontSize='5xl'>it-incubator</Text>
        <Text fontSize='2xl' p={'200'} paddingTop={0} paddingBottom={20}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur eaque ipsa itaque magni
          odio quas qui quibusdam quod ratione rem soluta sunt tenetur, vitae voluptatem. Accusamus asperiores aut
          sit.
        </Text>
      </Stack>
      <Stack spacing={8} direction='row' align='center' display={'inline-block'}>
        <Button colorScheme='blue' size='lg'>
          See Posts
        </Button>
        <Button colorScheme='blue' size='lg'>
          See Members
        </Button>
      </Stack>
    </div>
  )
}