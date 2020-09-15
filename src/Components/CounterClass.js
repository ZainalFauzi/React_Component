import React, { Component } from 'react';

class CounterClass extends Component {
  state = { value: 0 };

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: Math.max(prevState.value - 1, 0)
    }));
  };

  render() {
    return (
      <div>
        <h1><b>Counter Class</b></h1>
        <button className="btn btn-primary" type="button" onClick={this.decrement}>-</button>
        <h1 style={{display: "inline"}}>{this.state.value}</h1>
        <button className="btn btn-primary" type="button" onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default CounterClass;