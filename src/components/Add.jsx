import { Add as Addicon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react'

const Add = () => {
  const [open, setOpen] = useState(false);
  const Styledmodal = styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  })

  const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap :"10px",
    marginBottom : "20px"

  })

  return (
    <>
    <Tooltip onClick={(e)=> setOpen(true)}
     title="Add Post"
     sx={{position:"fixed", bottom:20, left :{xs : "calc(50% -25px )", md : 30}}}
    >
        <Fab color="primary" aria-label="add">
            <Addicon />
        </Fab>
    </Tooltip>

    <Styledmodal
      open={open}
      onClose={(e)=> setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box width={400} height={280} p={3} bgcolor="white" borderRadius={4}>
        <Typography variant='h6' color="grey" textAlign="center">Create Post</Typography>
        <UserBox>
        <Avatar onClick={(e) => setOpen(true)} sx={{width : 30, height : 30}} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        <Typography fontWeight={500} variant="span">Jhon Doe</Typography>
        </UserBox>
          <TextField
            sx={{width: "100%"}}
           rows={4}
           multiline
           variant='standard'
           placeholder="what's on your mind?"
           >
          </TextField>

          <Stack direction="row" mt={2} mb={3} gap={1}>
            <EmojiEmotions color='primary'/>
            <Image color="secondary"/>
            <VideoCameraBack color="success" />
            <PersonAdd color="error"/>
          </Stack>

          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange/></Button>
          </ButtonGroup>

      </Box>
    </Styledmodal>
     </>


  )
}

export default Add
