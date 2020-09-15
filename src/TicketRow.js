import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import RowNumbers from './RowNumbers';
import RowInfo from './RowInfo';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridItem: {
    paddingLeft: theme.spacing(5),
  }
}));


export default function NumbersRow(props) {
  const classes = useStyles();
  const { x, y, n } = props.ticket;

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item>
          <RowInfo x={x} y={y} />
        </Grid>
        <Grid item className={classes.gridItem}>
          <RowNumbers numbers={n} />
        </Grid>
      </Grid>
    </Paper>
  );
}
