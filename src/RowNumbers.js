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
    // backgroundColor: 'green',
  },
}));

export default function RowNumbers(props) {
  // https://material-ui.com/styles/basics/#adapting-based-on-props
  const classes = useStyles();

  const numberCards = props.numbers.map((val, index) =>
    <Grid item key={index}>
      <Paper className={classes.paper}>
        {val}
      </Paper>
    </Grid>
  );

  return (
    <Grid container>
      {numberCards}
    </Grid>
  );
}
