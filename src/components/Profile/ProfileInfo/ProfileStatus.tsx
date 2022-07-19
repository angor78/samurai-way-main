import React from 'react';
import {Box, Input} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";


type ProfileStatusPropsType = {
  status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
  }
  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }


  render() {
    // const [editMode, setEditMode] = useState<boolean>(false)
    return (
      <Box>
        {this.state.editMode
          ?
          <Box>
            <Input autoFocus={true}
                   value={this.props.status}
                   onBlur={this.deactivateEditMode}
                   size='xs'
                   focusBorderColor='red.400'
                   />
          </Box>
          :
          <Box>
            <span onClick={this.activateEditMode}>{this.props.status} <EditIcon verticalAlign={'top'} /></span>
          </Box>}
      </Box>

    )
  }

}