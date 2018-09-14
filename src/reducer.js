const initialState = {
  products: [
    { name: "Iphone", inStock: true, id: 1 },
    { name: "Echo spot", inStock: true, id: 2 },
    { name: "Fitbit charge", inStock: true, id: 3 },
    { name: "Macbook", inStock: false, id: 4 },
    { name: "Firestick", inStock: false, id: 5 }
  ],
  showInStock: false,
  nameFilter: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IN_STOCK_SELECTION_CHANGE": {
      return { ...state, showInStock: !state.showInStock };
    }
    case "NAME_FILTER_CHANGE": {
      return { ...state, nameFilter: action.nameFilter };
    }
    default:
      return state;
  }
};

export default reducer;
