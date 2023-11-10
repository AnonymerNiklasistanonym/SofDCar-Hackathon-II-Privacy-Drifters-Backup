import React from 'react';
import Map, { Layer, Source, MapRef, Marker } from "react-map-gl";
import {cellToLatLng, latLngToCell, polygonToCells, cellsToMultiPolygon } from "h3-js";



const RidingPoolMap = () => {

  const hexindex7Id = "876524d95fffffe";


  function getPolygonIndexes() {
    const polygon = [
      [37.813318999983238, -122.4089866999972145],
      [37.7198061999978478, -122.3744736999993603],
      [37.8151571999998453, -122.4798767000009008]
  ];
  console.log(polygonToCells(polygon, 7));
  const hexagons = polygonToCells(polygon, 7);

  return hexagons;
  }

  function update(coordinates){
    console.log(coordinates);
  }
  
  return (
<div>
        <div className="map">
          <Map
            initialViewState={{
              latitude: 37.81,
              longitude: -122.45,
              zoom: 10,
              bearing: 0,
              pitch: 0,
            }}
            onMouseUp={update}
            mapStyle="mapbox://styles/mapbox/light-v9"
            mapboxAccessToken="pk.eyJ1Ijoic3QxNjgzODAiLCJhIjoiY2xvdDA1MnQ1MDNiNzJqcHd3aXdtcXd6aCJ9.rk-klPlb-rWVhAbyFFk5Jg"
            style={{
              height: "100vh",
              width: "100vw",
            }}
          >
            <Source
              type="geojson"
              data= {{
                "type": "Feature",
                "geometry": {
                  "type": "MultiPolygon",
                  "coordinates": cellsToMultiPolygon(getPolygonIndexes(), true)
                },
                "id": "abc123"
              }}
            >
              <Layer
                {...{
                  type: "fill",
                  paint: {
                    'fill-outline-color': 'white',
                    "fill-color": "#E14C48",
                    "fill-opacity": 0.7,
                  },
                }}
              />
              
            </Source>
          </Map>
        </div> 
      </div>
  );
};

export default RidingPoolMap