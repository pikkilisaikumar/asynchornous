import React, { Component } from "react";

export class App extends Component {
  state = { count: 0 };
  handleIncrement = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
    setTimeout(() => {
      console.log(this.state.count);
    }, 50);
    console.log(this.state.count, "outside of set time out");
  };
  render() {
    return (
      <div>
        <h1>Count value {this.state.count}</h1>
        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

export default App;
