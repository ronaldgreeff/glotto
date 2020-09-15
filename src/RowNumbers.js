import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

class RowNumbers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tempNumbers: [1,2,3,4,9,6,7],
    };
  }

  render() {

    const tempNumbers = this.state.tempNumbers;
    var numberCards = []
    for (var v of tempNumbers) {
      numberCards.push(
        <Grid item>
          <Paper>
            {v}
          </Paper>
        </Grid>
      );
    };

    return (
      <Grid container>
        {numberCards}
      </Grid>
    );
  };
}

export default RowNumbers;
