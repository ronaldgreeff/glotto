import React from 'react';
import 'fontsource-roboto';
import './App.css';
import Button from '@material-ui/core/Button';


function Square(props) {
  return (
    <Button className="square">
      {props.value}
    </Button>
    );
}

function Row(props) {
  return (
    null
    );
}

function App() {
  return (
    <Square value="dick" />
  );
}

export default App;
