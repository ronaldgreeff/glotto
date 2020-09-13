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

export default function SingleNumber() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Paper className={classes.paper}>
          7
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          7
        </Paper>
      </Grid>
    </Grid>
  );
}
