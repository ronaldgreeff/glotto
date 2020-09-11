import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SingleNumber from './SingleNumber';
import RowInfo from './RowInfo';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NumbersRow() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={2}>
          <RowInfo />
        </Grid>
        <Grid item xs={1}>
          <SingleNumber />
        </Grid>
        <Grid item xs={1}>
          <SingleNumber />
        </Grid>
          <SingleNumber />
          <SingleNumber />
          <SingleNumber />
          <SingleNumber />
      </Grid>
    </Paper>
  );
}
