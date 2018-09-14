import React from "react";
import { connect } from "react-redux";

const List = props => {
  return (
    <div>
      <ul>
        {props.products
          .filter(product => (props.showInStock ? product.inStock : true))
          .filter(
            product =>
              props.nameFilter
                ? product.name.startsWith(props.nameFilter)
                : true
          )
          .map(product => {
            return <li key={product.id}>{product.name}</li>;
          })}
      </ul>
    </div>
  );
};

const mapStateAsProps = state => {
  return {
    showInStock: state.showInStock,
    nameFilter: state.nameFilter,
    products: state.products
  };
};

export default connect(mapStateAsProps)(List);
