import React from "react";
import {StarIcon} from "@chakra-ui/icons";
import {Badge, Box, Image} from "@chakra-ui/react";
import {PostType} from "../../../../redux/storeTypes";


function Post(props: PostType) {

  const property = {
    date: 3,
    time: 223,
    title: 'Something title post',
    message: props.message,
    likes: props.likeCount,
    reviewCount: 34,
    rating: 4,
    photo: props.photo
  }

  return (
    <Box margin={3} borderWidth='1px' borderRadius='lg' overflow={'hidden'} padding={'5'} >
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.date} day ago &bull; {property.time} time
          </Box>

        </Box>
        <Box p={'10px'} textAlign={'left'}>
          <Image align={'center'} src={property.photo} boxSize='100%'/>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>
        <Box>
          {property.message}
          <Box as='span' color='gray.600' fontSize='sm'>
          </Box>
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.likes} likes
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Post
