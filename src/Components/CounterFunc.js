import React, { useState } from 'react';

let styleDiv = {
    color: "#6c757d"
}

const CounterFunc = () => {
  const [countNum, setCountNum] = useState(0)

  const decrement = () => {
    if (countNum > 0) {
        setCountNum(countNum - 1);
  }};
  
  const increment = () => {
      setCountNum(countNum+1)
  }

  return (
    <div style={styleDiv}>
      <h1 style={{ Color: "red" }}><b>Counter Function</b></h1>
      <button className="btn btn-primary" type="button" onClick={decrement}>-</button>
      <h1 style={{ display: "inline" }}>{countNum}</h1>
      <button className="btn btn-primary" type="button" onClick={increment}>+</button>
    </div>
  );
}

export default CounterFunc;