import React from "react";
import {Box} from "@chakra-ui/react";
import {DialogType} from "../../../redux/storeTypes";
import logo from './../../../images/logo.png'


export const DialogItem = (props: DialogType) => {
  //let path = "/dialogs/" + props.id
  return (

    <Box bg='blue.300' w='100%' p={4} pl={'0'} color='white' display={'flex'} flexDirection={'row'}>
      {/*<NavLink to={path} style={isActive => ({*/}
      {/*  color: isActive ? "teal" : "white",*/}
      {/*  textDecoration: "none"*/}
      {/*})}>*/}

        <Box >
          <img width={'50px'} height={'50px'} src={logo} alt="logo"/>
        </Box>
      <Box >
        {props.name}
      </Box>

      {/*</NavLink>*/}
    </Box>


  )
}