import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./ecommerce-app/App";
import store from "./ecommerce-app/redux/store";
let renderable = document.getElementById("root");

const Main = () => {
  return <App />;
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />{" "}
    </BrowserRouter>
  </Provider>,

  renderable
);
