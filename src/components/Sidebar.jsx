import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import {ListAlt, Group, Storefront,Diversity1, Settings, Person, AccountBox, ModeNight} from '@mui/icons-material/'
const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{display: {xs : "none", sm : "block"} }}>
        <Box position="fixed">

         <List>
            {/* Home */}
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          {/* Pages */}
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <ListAlt/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

            {/* Group */}
            <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>

          {/* Marketplace */}
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          {/* Friends */}
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Diversity1/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

            {/* setting */}
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          {/* /* setting */} 
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>


            {/* /* Dark Mode */} 
            {/* <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem> */}





          </List>
        </Box>
    </Box>
  )
}

export default Sidebar
