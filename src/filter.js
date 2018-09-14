import React from "react";
import { connect } from "react-redux";
import { inStockSelectionChange, nameFilterChange } from "./actions";

const Filter = props => {
  return (
    <div>
      <label>
        <input
          type="text"
          onChange={e => {
            props.nameFilterChanged(e.target.value);
          }}
        />
        Filter
      </label>
      <label>
        <input
          type="checkbox"
          onChange={props.showInStockChanged}
          checked={props.showInStock}
        />
        Show only in stock items
      </label>
    </div>
  );
};

const mapStateAsProps = state => {
  return {
    showInStock: state.showInStock,
    nameFilter: state.nameFilter
  };
};

const mapDispatcherAsProps = dispatch => ({
  showInStockChanged: () => dispatch(inStockSelectionChange()),
  nameFilterChanged: name => {
    dispatch(nameFilterChange(name));
  }
});

export default connect(
  mapStateAsProps,
  mapDispatcherAsProps
)(Filter);
