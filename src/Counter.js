import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./store";

// mock some data first to get a render working
// play around with initial state to see what renders / get it to where you want it
export class Counter extends Component {
  // componentDidMount() {
  // }

  handleIncrement = () => {
    console.log("is clicked?");
    this.props.onIncrementClick(this.props.counter);
  };

  handleDecrement = () => {
    this.props.onDecrementClick(this.props.counter);
  };

  render() {
    const counter = this.props.counter;
    return (
      <div>
        <h1>Counter = {counter}</h1>
        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}

const mapState = store => {
  return { counter: store.counter };
};

const mapDispatch = dispatch => {
  return {
    onIncrementClick: () => {
      dispatch(increment());
    },
    onDecrementClick: () => {
      dispatch(decrement());
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Counter);
