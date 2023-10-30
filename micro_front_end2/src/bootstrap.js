import React from "react";
import { createRoot } from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.scss";
import { App } from "./App";
import Contents from "./Contents";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <App>
    <Contents />
  </App>
);
