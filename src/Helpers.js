function factorialize(num) {
  // 0 should return 1 | 5 should return 120
  // reject <0
  if (num < 0)
        return -1;
  else if (num == 0)
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

function calcOdds(props) {
  //  totalPossibleNumbers! / ( nNumbersChosen!*(totalPossibleNumbers-nNumbersChosen)! )
  var fY = factorialize(props.y)
  var fX = factorialize(props.x)
  var dB = factorialize(props.y - props.x)

  return ( fY / (fX*dB) )
}
