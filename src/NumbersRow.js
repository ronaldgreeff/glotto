import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SingleNumber from './SingleNumber'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Row() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <SingleNumber />
    </Paper>
  );
}
