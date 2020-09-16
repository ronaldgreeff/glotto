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

export default function TicketGrid(props) {
  const classes = useStyles();

  function handleRow(tickets) {
    //                                      todo: map key to id, not index.
    const ticketRows = tickets.map((ticket, index) =>
      <Grid item key={index} xs={12}>
        <TicketRow ticket={ticket}/>
      </Grid>
    );
    return ticketRows;
  };

  return (
    <div>
      <Grid container spacing={2}>
        { handleRow(props.tickets) }
      </Grid>
    </div>
  );
}

// Don't need a class actually
// class TicketGrid extends React.Component {
//
//   handleRow(tickets) {
//     //                                      todo: map key to id, not index.
//     const ticketRows = tickets.map((ticket, index) =>
//       <Grid item key={index} xs={12}>
//         <TicketRow ticket={ticket}/>
//       </Grid>
//   );
//     return ticketRows;
//   };
//
//   render() {
//     return (
//       <div>
//         <Grid container spacing={2}>
//           {this.handleRow(this.props.tickets)}
//         </Grid>
//       </div>
//     );
//   }
// }
//
// export default TicketGrid;
