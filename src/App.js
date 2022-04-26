import React from "react";
import Counter from "./components/Counter.js";
import Button from "./components/Button.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrementCounter() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div className="container">
        <h2>This is a Counter</h2>
        <Counter counter={this.state.counter} />

        <Button
          increment={() => this.incrementCounter()}
          decrement={() => this.decrementCounter()}
        />
      </div>
    );
  }
}

export default App;
