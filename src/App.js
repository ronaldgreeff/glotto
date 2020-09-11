import React from 'react';
import 'fontsource-roboto';
import AppBar from './AppBar';
import NumbersGrid from './NumbersGrid'
import Container from '@material-ui/core/Container';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';


function App() {
  return (
    <div className="App">
      <AppBar />
      <Box pt={2}>
        <Container >
          <NumbersGrid />
        </Container>
      </Box>
    </div>
  );
}

export default App;