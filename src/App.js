import React from "react";
import "./App.css";
import Clock from "./clock";
import Products from "./products";

export default () => {
  return (
    <div>
      <h1>Welcome to React</h1>
      <Clock />
      <Products />
    </div>
  );
};
