import { Box, createTheme } from '@mui/material';
import { Stack } from '@mui/system';
import * as React from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Add from './components/Add';
import { ThemeProvider } from '@emotion/react';

function App() {
  const [mode, setMode] = React.useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>

    <Box bgcolor={"background.default"} color={"text.primary"} >
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </Stack>
    <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
