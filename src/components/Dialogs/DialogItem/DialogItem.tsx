import React from "react";
import {DialogType} from "../../../redux/store";
import {Box} from "@chakra-ui/react";


export const DialogItem = (props: DialogType) => {
  //let path = "/dialogs/" + props.id
  return (

    <Box bg='blue.300' w='100%' p={4} color='white'>
      {/*<NavLink to={path} style={isActive => ({*/}
      {/*  color: isActive ? "teal" : "white",*/}
      {/*  textDecoration: "none"*/}
      {/*})}>*/}

        <Box>
            {props.name}
        </Box>

      {/*</NavLink>*/}
    </Box>


  )
}