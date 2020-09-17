import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
  const classes = useStyles();

  const xMax = 7;
  const yMax = 49;
  const min = 1;

  const [yBlocks, setyBlocks] = useState(min);
  const [xBlocks, setxBlocks] = useState(min);
  const [yBlockSpace, setyBlockSpace ] = useState(min);
  const [xBlockSpace, setxBlockSpace ] = useState(min);

  const totalBlocks = yBlocks*xBlocks;
  const volToOccupy = yBlockSpace*xBlockSpace;
  const squareDims = ((totalBlocks/volToOccupy)/2);

  // const blockHeight = (yBlockSpace/yBlocks)/2;
  // const blockWidth = (xBlockSpace/xBlocks)/2;

  const ref = useRef(null);
  useEffect(() => {
    setyBlockSpace(ref.current.offsetWidth);
    setxBlockSpace(ref.current.offsetHeight);
  }, [ref.current]);
  // console.log('width', ref.current ? ref.current.offsetWidth: 0);

  const nBlocks = [];
  for (var i in Array.from(Array(totalBlocks))) {
    nBlocks.push(
      <Grid item key={i} >
        <Box width={squareDims} height={squareDims}>
          {i}
        </Box>
      </Grid>
    );
  }

  return (
    <Container className={classes.root}>
      <Container>
        {squareDims}
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
            onChange={(event, value) => setxBlocks(value)}
          />
        </Grid>

        <Grid item xs={11} className={classes.blocks}>
          <Grid container ref={ref}>
            {nBlocks}
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
            onChange={(event, value) => setyBlocks(value)}
          />
        </Grid>
      </Grid>

    </Container>
  );
}
