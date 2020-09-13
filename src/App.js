import React from 'react';
import 'fontsource-roboto';
import AppBar from './AppBar';
import TicketGrid from './TicketGrid'
import Container from '@material-ui/core/Container';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';


function App() {
  return (
    <div className="App">
      <AppBar />
      <Box pt={2}>
        <Container >
          <TicketGrid />
        </Container>
      </Box>
    </div>
  );
}

export default App;