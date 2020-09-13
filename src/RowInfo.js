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

export default function RowInfo() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item>
          7
        </Grid>
        <Grid item>
          7
        </Grid>
      </Grid>
    </Paper>
  );
}
