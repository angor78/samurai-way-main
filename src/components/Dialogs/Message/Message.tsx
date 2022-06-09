import React from "react";
import {MessageType} from "../../../redux/store";
import {Box} from "@chakra-ui/react";


export const Message = (props: MessageType) => {
  return (
    <Box bg='teal.500' w='100%' p={4} color='white'>
      {props.message}
    </Box>
  )
}