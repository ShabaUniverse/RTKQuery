import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productsApi } from "./redux/dataSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
);
