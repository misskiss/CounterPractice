import React, { Component } from "react";
import { connect } from "react-redux";

// mock some data first to get a render working
// play around with initial state to see what renders / get it to where you want it
export function Counter(props) {
  console.log(props);
  return (
    <div>
      <h1>Counter = {props.counter}</h1>
    </div>
  );
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
