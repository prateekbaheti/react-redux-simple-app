import React from "react";
import List from "./list";
import Filter from "./filter";

export default () => {
  return (
    <div>
      <h1>Products</h1>
      <Filter />
      <List />
    </div>
  );
};
