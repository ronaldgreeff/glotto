import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import RowNumbers from './RowNumbers';
import RowInfo from './RowInfo';
import RowOdds from './RowOdds';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    direction: 'row',
    justifyContent: 'space-between',
  },
  gridItem: {
  },
}));

export default function NumbersRow(props) {
  const classes = useStyles();
  const { x, y, n, odds } = props.ticket;

  return (
    <Paper className={classes.paper}>
      <Grid container className={classes.gridContainer}>
        <Grid item>
          <RowInfo x={x} y={y} />
        </Grid>
        <Grid item>
          <RowNumbers numbers={n} />
        </Grid>
        <Grid item>
          <RowOdds odds={odds} />
        </Grid>
      </Grid>
    </Paper>
  );
}
