import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function RowInfo(props) {
  const classes = useStyles();

  // function factorialize(num) {
  //   // 0 should return 1 | 5 should return 120
  //   // reject <0
  //   if (num < 0)
  //         return -1;
  //   else if (num == 0)
  //       return 1;
  //   else {
  //       return (num * factorialize(num - 1));
  //   }
  // }
  //
  // function calcOdds() {
  //   //  totalPossibleNumbers! / ( nNumbersChosen!*(totalPossibleNumbers-nNumbersChosen)! )
  //   var fY = factorialize(props.y)
  //   var fX = factorialize(props.x)
  //   var dB = factorialize(props.y - props.x)
  //
  //   return ( fY / (fX*dB) );
  // }

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item>
          { props.odds }
        </Grid>
      </Grid>
    </Paper>
  );
}
