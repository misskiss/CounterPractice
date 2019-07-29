import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { store } from "./store";
import Counter from "./Counter";

import "./styles.css";

function App() {
  // console.log("store: ", store);
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Michelle's Quick Counter</h1>
        <h2>Start here to count!</h2>
        <Counter />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
