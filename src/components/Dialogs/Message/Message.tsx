import React from "react";
import {Box} from "@chakra-ui/react";
import {MessageType} from "../../../redux/storeTypes";


export const Message = (props: MessageType) => {
  return (
    <Box bg='teal.500' w='100%' p={4} color='white'>
      {props.message}
    </Box>
  )
}