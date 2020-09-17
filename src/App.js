import React from 'react';
import 'fontsource-roboto';
import Container from '@material-ui/core/Container';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import AppBar from './AppBar';
import TicketGrid from './TicketGrid'
import TicketChooser from './TicketChooser'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ticketData: [],
      lottoData: [],
    };
  }

  restGetTickets() {
    const ticketData = [
      { x: 1, y: 2, n: [1,] },
      { x: 7, y: 49, n: [8,12,3,30,6,40,32] },
      { x: 5, y: 69, n: [26,47,15,59,65] },
    ]
    for (var i in ticketData) {
      var odds = calcOdds(ticketData[i].x, ticketData[i].y)
      ticketData[i]['odds'] = odds;
    }
    this.setState({
      ticketData: ticketData,
    });
  }

  getLottoResults() {
    const lottoData = [
      { x: 1, y: 2, n: [1,] },
      { x: 7, y: 49, n: [8,12,3,30,6,40,32] },
      { x: 5, y: 69, n: [26,47,15,59,65] },
    ]
    this.setState({
      lottoData: lottoData,
    })
  }

  checkTickets() {
    this.getLottoResults();

    const lottoData = this.state.lottoData;
    const ticketData = this.state.ticketData;

    for (var ld of lottoData) {
      for (var td of ticketData) {
        if (ld.x === td.x && ld.y === td.y) {
          var ln = ld.n;
          var tn = td.n;
          // eval for each i in tn if in ln
        }
      }
    }

  }

  render() {

    return (
      <TicketChooser />
      // <div className="App">
      //   <AppBar />
      //   <Box pt={2}>
      //     <Container >
      //       <TicketGrid tickets={this.state.ticketData} />
      //     </Container>
      //   </Box>
      //   <Box>
      //     <TempButton words={'getTickets'} onClick={() => this.restGetTickets()} />
      //     <TempButton words={'checkTickets'} onClick={() => this.checkTickets()} />
      //   </Box>
      // </div>
    );
  }
}

export default App;


function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function calcOdds(x, y) {
  //  totalPossibleNumbers! / ( nNumbersChosen!*(totalPossibleNumbers-nNumbersChosen)! )
  var tpns = factorial(y);
  var nsc = factorial(x);
  var tpnsmnsc = factorial(y-x);
  var result = ( tpns / (nsc*tpnsmnsc) );
  return result.toFixed();
}

function TempButton(props) {
  // use this to setState of App,
  // simulating API call to retrieve user's tickets
  return (
    <button onClick={props.onClick}>
      {props.words}
    </button>
  );
}
