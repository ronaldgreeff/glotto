import React from 'react';
import 'fontsource-roboto';
import AppBar from './AppBar';
import TicketGrid from './TicketGrid'
import Container from '@material-ui/core/Container';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';

function TempButton(props) {
  // use this to setState of App,
  // simulating API call to retrieve user's tickets
  return (
    <button onClick={props.onClick}>
      restGetTickets
    </button>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ticketData: [
        { x: 7, y: 7, n: [1,2,3,4,5,6,7] },
        { x: 7, y: 7, n: [1,2,3,4,5,8,7] },
      ]
    };
  }

  render() {

    return (
      <div className="App">
        <AppBar />
        <Box pt={2}>
          <Container >
            <TicketGrid tickets={this.state.ticketData} />
          </Container>
        </Box>
        <Box>
          <TempButton />
        </Box>
      </div>
    );
  }
}

export default App;
