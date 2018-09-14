import React, { Component } from "react";
import "./App.css";
import Clock from "./clock";
import Products from "./products";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <Clock />
        <Products />
      </div>
    );
  }
}

export default App;
