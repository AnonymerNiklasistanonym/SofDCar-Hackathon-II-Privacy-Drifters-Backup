import React from 'react';
import Map, { Layer, Source, MapRef, Marker } from "react-map-gl";
import {cellToLatLng, latLngToCell, polygonToCells, cellsToMultiPolygon } from "h3-js";



const RidingPoolMap = () => {

  const hexindex7Id = "876524d95fffffe";

  const [currentCordinateLng,setCurrentCordinateLng] = React.useState(37.81);

  const [currentCordinateLat,setCurrentCordinateLat] = React.useState(-122.45);

  const [currentCordinate,setCurrentCordinate] = React.useState([currentCordinateLng, currentCordinateLat]);


  React.useEffect(() => {
  }, [
    currentCordinateLng,
    currentCordinateLat,
    currentCordinate,
  ]);


  



  function getPolygonIndexes() {
    const polygon = [
      [currentCordinateLng - 1.2, currentCordinateLat + 1.2],
      [currentCordinateLng - 1.2,  currentCordinateLat - 1.2],
      [currentCordinateLng + 1.2, currentCordinateLat - 1.2],
      [currentCordinateLng + 1.2, currentCordinateLat + 1.2],
  ];

  //const h3Ine

  console.log(currentCordinateLng, currentCordinateLat)
   const hexagons = polygonToCells(polygon, 7);
    console.log(hexagons)
    return hexagons;
  }

  function update(coordinates){
    let {lng, lat} = coordinates.lngLat;
    setCurrentCordinateLng(lat);
    setCurrentCordinateLat(lng);
    setCurrentCordinate([lng, lat]);



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
                  // simgle polygon
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
                    'fill-outline-color': 'green',
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