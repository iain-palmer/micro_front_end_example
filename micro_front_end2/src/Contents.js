import * as React from "react";
import { Source, Layer } from "react-map-gl";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [0.0001158, 51.47622],
            [0.0003223, 51.4762235],
            [0.0006824, 51.4763278],
            [-0.0002831, 51.4786829],
            [-0.0034852, 51.4790471],
            [-0.0035905, 51.4778202],
            [0.0001158, 51.47622],
          ],
        ],
      },
    },
  ],
};

const layerStyle = {
  id: "point",
  type: "fill",
  paint: {
    "fill-color": "#e81764",
    "fill-opacity": 0.5,
  },
};

const Contents = () => {
  return (
    <Source id="my-data" type="geojson" data={geojson}>
      <Layer {...layerStyle} />
    </Source>
  );
};
export default Contents;
