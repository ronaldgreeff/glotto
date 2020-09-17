import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 10,
    left: 0,
  },
  blocks: {
    height: '90vh',
    width: '90vw',
  },
}));

export default function TicketChooser(props) {
  const classes = useStyles(props);

  const xMax = 7;
  const yMax = 49;
  const min = 1;
  const [yVal, setY] = useState(min);
  const [xVal, setX] = useState(min);


  function genBlocks() {
    const nBlocks = []
    for (var i in Array.from(Array(yVal * xVal))) {
      nBlocks.push(
        <Grid item>
          {parseInt(i)+1}
        </Grid>
      )
    }
    console.log(nBlocks)
    return nBlocks;
  }

  return (
    <Container className={classes.root}>
      <Container>

      </Container>
      <Grid container>
        <Grid item xs={1}>
          <Typography id="slider" gutterBottom>
          </Typography>
          <Slider
            ariaLabelledby="slider"
            valueLabelDisplay="auto"
            defaultValue={min}
            step={min}
            min={min}
            max={yMax}
            marks
            orientation="vertical"
            onChange={(event, value) => setX(value)}
          />
        </Grid>

        <Grid item xs={11} className={classes.blocks}>
          <Grid container>
            {genBlocks()}
          </Grid>
        </Grid>

        <Grid item xs={1} />

        <Grid item xs={11}>
          <Typography id="slider" gutterBottom>
          </Typography>
          <Slider
            ariaLabelledby="slider"
            valueLabelDisplay="auto"
            defaultValue={min}
            step={min}
            min={min}
            max={xMax}
            marks
            onChange={(event, value) => setY(value)}
          />
        </Grid>
      </Grid>

    </Container>
  );
}
