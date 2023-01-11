import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem , styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

import {Facebook, Mail, Notifications} from "@mui/icons-material"
const StyledToolbar =styled(Toolbar)({
    display :"flex",
    justifyContent : "space-between"
})

const Search = styled("div") (({theme}) =>({
    backgroundColor : "white",
    padding : "0px 10px",
    borderRadius : theme.shape.borderRadius,
    width : "40%"
}))

const Icons = styled(Box)(({theme})=> ({
    // backgroundColor : "white",
    display : "none",
    gap:  "20px",
    alignItems : "center",
    [theme.breakpoints.up("sm")] :{
        display : "flex"
    }
}))

const UserBox = styled(Box)(({theme})=> ({
    display : "flex",
    gap:  "10px",
    alignItems : "center",
    [theme.breakpoints.up("sm")] :{
        display : "none"
    }
}))


const Navbar = () => {
    const [open,setOpen] = useState(false);
  return (
      <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{ display : {xs : "none", sm : "block"}}}>Facebook</Typography>
            <Facebook sx={{ display : {xs : "block", sm : "none"}}} />
            <Search><InputBase placeholder='Search...'/></Search>

            {/* Big screen */}
            <Icons>
            <Badge badgeContent={4} color="error">
                <Mail />
            </Badge>

            <Badge badgeContent={4} color="error">
                <Notifications />
            </Badge>

            <Avatar onClick={(e) => setOpen(true)} sx={{width : 30, height : 30}} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            </Icons>
            {/* Small screen */}
            <UserBox onClick={(e) => setOpen(true)}>
            <Avatar sx={{width : 30, height : 30}} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <Typography variant='span'>Jhon</Typography>
            </UserBox>


        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      </AppBar>
  )
}

export default Navbar
