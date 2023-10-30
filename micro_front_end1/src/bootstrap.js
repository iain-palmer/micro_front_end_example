import React from "react";
import { createRoot } from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.scss";
import { App } from "./App";

const Contents = React.lazy(() => import("micro_front_end2/Contents"));
const Title = React.lazy(() => import("micro_front_end2/Title"));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <Title></Title>
    <App>
      <Contents />
    </App>
  </>
);
