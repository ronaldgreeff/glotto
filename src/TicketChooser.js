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
  blockArea: {
    height: "90vh",
    width: "90vw",
    justify: "space-around",
    alignItems:"center",
    direction: "row-reverse",
    backgroundColor: "rgb(179, 218, 227)",
  },
  gridItem: {
    outline: "1px dotted rgb(89, 170, 189)",
  },
  ticketValueBox: {
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
  },
}));

export default function TicketChooser(props) {
  const classes = useStyles();

  const xMax = 7;
  const yMax = 49;
  const min = 1;

  // slider values
  const [yValue, setyValue] = useState(min);
  const [xValue, setxValue] = useState(min);
  // available space
  const [yHeight, setyHeight ] = useState(min);
  const [xWidth, setxWidth ] = useState(min);

  const totalBlocks = xValue*yValue;
  const marginSpace = 1.4;

  const boxHeight = (yHeight/yValue)-.1;
  const boxWidth = (xWidth/xValue)-.1;

  const ref = useRef(null);
  useEffect(() => {
    setxWidth(ref.current.offsetWidth);
    setyHeight(ref.current.offsetHeight);
  }, [ref.current]);

  const nBlocks = [];
  for (var i in Array.from(Array(totalBlocks))) {
    nBlocks.push(
      <Grid item key={i} className={classes.gridItem}>
        <Box className={classes.ticketValueBox} width={boxWidth} height={boxHeight}>
          <Typography className={classes.ticketValue}>
            {parseInt(i)+1}
          </Typography>
        </Box>
      </Grid>
    );
  }

  return (
    <Container className={classes.root}>
      <Container>
        totalBlocks: {totalBlocks},
        yHeight: {yHeight} / {yValue},
        xWidth: {xWidth} / {xValue},
        boxH: {boxHeight},
        boxW: {boxWidth},
      </Container>
      <Grid container>
        <Grid item xs={1}>
          <Typography id="slider" gutterBottom>
          </Typography>
          <Slider
            orientation="vertical"
            ariaLabelledby="slider"
            valueLabelDisplay="auto"
            defaultValue={min}
            step={min}
            min={min}
            max={yMax}
            marks
            onChange={(event, value) => setyValue(value)}
          />
        </Grid>

        <Grid item xs={11} className={classes.blockArea} ref={ref}>
          <Grid container>
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
            onChange={(event, value) => setxValue(value)}
          />
        </Grid>
      </Grid>

    </Container>
  );
}
