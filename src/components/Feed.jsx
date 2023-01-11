
import { Box} from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post img="https://images.pexels.com/photos/2626720/pexels-photo-2626720.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Post img="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Post img="https://images.pexels.com/photos/10519583/pexels-photo-10519583.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Post img="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Post img="https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Post img="https://images.pexels.com/photos/532310/pexels-photo-532310.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Post img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=600"/>


    </Box>
  )
}

export default Feed
