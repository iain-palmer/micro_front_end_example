import * as React from "react";
import Map from "react-map-gl";

export function App({ children }) {
  return (
    <Map
      mapboxAccessToken={process.env.MAPBOX_TOKEN}
      initialViewState={{
        longitude: 0.0,
        latitude: 51.4769,
        zoom: 16,
      }}
      style={{ width: 1000, height: 800 }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
    >
      {children}
    </Map>
  );
}
