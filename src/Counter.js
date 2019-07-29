import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./store";

// mock some data first to get a render working
// play around with initial state to see what renders / get it to where you want it
export class Counter extends Component {
  componentDidMount() {}

  render() {
    const counter = this.props.counter;
    return (
      <div>
        <h1>Counter = {counter}</h1>
      </div>
    );
  }
}

const mapState = store => {
  return { counter: store.counter };
};

const mapDispatch = () => {
  return {};
};

export default connect(
  mapState,
  mapDispatch
)(Counter);
