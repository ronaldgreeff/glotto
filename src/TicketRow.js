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
    paddingLeft: theme.spacing(2),
  }
}));

export default function NumbersRow() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item>
          <RowInfo />
        </Grid>
        <Grid item className={classes.gridItem}>
          <RowNumbers />
        </Grid>
      </Grid>
    </Paper>
  );
}
