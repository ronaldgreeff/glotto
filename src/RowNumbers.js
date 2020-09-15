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

export default function RowNumbers(props) {
  const classes = useStyles();

  var numberCards = []
    for (var v of props.numbers) {
      numberCards.push(
        <Grid item>
          <Paper className={classes.paper}>
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
}
