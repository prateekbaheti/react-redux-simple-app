import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

const ProviderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ProviderApp />, document.getElementById("root"));
registerServiceWorker();
