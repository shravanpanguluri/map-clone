import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./style.scss";
import MapContainer from "./components/MapContainer";
import Layout from "./Layout";

const App = () => {
  return (
    <div>
      <h1>Hello Map</h1>
      <Layout>
        <MapContainer />
      </Layout>
    </div>
  );
};

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
