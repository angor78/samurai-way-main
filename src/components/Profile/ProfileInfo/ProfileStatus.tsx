import React, {ChangeEvent} from 'react';
import {Box, Input} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";


type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
      status: this.props.status
    })
    this.props.updateStatus(this.state.status)
  }

  onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({status: e.currentTarget.value})
  }
componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
  if(prevProps.status!==this.props.status){
    this.setState({status: this.props.status})
  }

}

  render() {
    return (
      <Box>
        {this.state.editMode
          ?
          <Box>
            <Input autoFocus={true}
                   value={this.state.status}
                   onChange={this.onChangeHandler}
                   onBlur={this.deactivateEditMode}
                   size='xs'
                   focusBorderColor='red.400'
            />
          </Box>
          :
          <Box>
            <div onClick={this.activateEditMode}>{this.props.status} <EditIcon verticalAlign={'top'}/></div>
          </Box>}
      </Box>

    )
  }

}