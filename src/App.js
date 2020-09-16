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
      ]
    };
  }

  factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

  calcOdds(x, y) {
    //  totalPossibleNumbers! / ( nNumbersChosen!*(totalPossibleNumbers-nNumbersChosen)! )
    var tpns = this.factorial(y);
    var nsc = this.factorial(x);
    var tpnsmnsc = this.factorial(y-x);
    var result = ( tpns / (nsc*tpnsmnsc) );
    return result.toFixed();
  }

  restGetTickets(data) {
    var ticketData = [
      { x: 1, y: 2, n: [1,] },
      { x: 7, y: 49, n: [8,12,3,30,6,40,32] },
      { x: 5, y: 69, n: [26,47,15,59,65] },
    ]
    for (var i in ticketData) {
      var odds = this.calcOdds(ticketData[i].x, ticketData[i].y)
      ticketData[i]['odds'] = odds;
    }
    this.setState({
      ticketData: ticketData,
    });
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
          <TempButton onClick={(data) => this.restGetTickets(data)} />
        </Box>
      </div>
    );
  }
}

export default App;
