import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TicketRow from './TicketRow'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

class NumbersGrid extends React.Component {

  handleRow(tickets) {
    var ticketRows = [];
    for (var ticket of tickets) {
      ticketRows.push(
        <Grid item xs={12}>
          <TicketRow ticket={ticket}/>
        </Grid>
      );
    }
    return ticketRows;
  };

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          {this.handleRow(this.props.tickets)}
        </Grid>
      </div>
    );
  }
}

export default NumbersGrid;

// export default function NumbersGrid(props) {
//   const classes = useStyles();
//
//   return (
//     <div className={classes.root}>
//       {props.tickets[0]['n']}
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TicketRow />
//         </Grid>
//         <Grid item xs={12}>
//           <TicketRow />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
