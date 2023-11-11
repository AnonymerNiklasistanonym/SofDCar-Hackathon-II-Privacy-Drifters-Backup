import React from 'react';
import Map, { Layer, Source, MapRef, Marker } from "react-map-gl";
import {cellToBoundary, polygonToCells, cellsToMultiPolygon, cellToChildPos, latLngToCell } from "h3-js";
import { Box, Button, Divider, Modal, Typography } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const RidingPoolMap = () => {


  const style = {
    position: 'absolute',
    top: '50%',
    right: '5%',
    transform: 'translate(0%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    maxHeight: '75vh',
    overflow: 'auto',
    boxShadow: 24,
    p: 4,
  };
  

  const [currentCordinateLng,setCurrentCordinateLng] = React.useState(48.7758);

  const [currentCordinateLat,setCurrentCordinateLat] = React.useState(9.1829);

  const [currentCordinate,setCurrentCordinate] = React.useState([currentCordinateLng, currentCordinateLat]);

  // currentClickedHexagon
  const [currentClickedHexagon, setCurrentClickedHexagon] = React.useState(null);
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
  }, [
    currentCordinateLng,
    currentCordinateLat,
    currentCordinate,
  ]);

  React.useEffect(() => {
  }, [
    currentClickedHexagon,
  ]);



  function fetchDummyData() {

    return [
      {
        userId: "abcd",
        pickupLocation: {
          "type": "pickup location",
          "coordinates": [48.7758, 9.1729]
        },
        dropoffLocation: {
          "type": "dropoff location",
          "coordinates": [48.7758, 9.2229]
        },
        gridLocation: "876524d95fffffe",
        rating: 4.5,
        userPublicKey: "c18e0779fc19c6b5bd2446317fd2f22fc31bda63933bb14b1cdde688aa91f9b5",
        maxUserRating: 4.5,
        minRating: 4.5,
        maxPassengers: 4,
        maxWaitingTime: 10,
        minPassengerRating: 2.5,
        role: "user",
      },

      {
        userId: "abcd",
        pickupLocation: {
          "type": "pickup location",
          "coordinates": [48.7758, 9.1729]
        },
        dropoffLocation: {
          "type": "dropoff location",
          "coordinates": [48.7758, 9.2229]
        },
        gridLocation: "876524d95fffffe",
        rating: 4.5,
        userPublicKey: "d7573fac6dd178aa06582f9d29f81c734ec51ccf421272ef1b9a4290d8853e9b",
        maxUserRating: 4.5,
        minRating: 4.5,
        maxPassengers: 4,
        maxWaitingTime: 10,
        minPassengerRating: 2.5,
        role: "user",
      },
      {
        userId: "abcd",
        pickupLocation: {
          "type": "pickup location",
          "coordinates": [48.7758, 9.1729]
        },
        dropoffLocation: {
          "type": "dropoff location",
          "coordinates": [48.7758, 9.2229]
        },
        gridLocation: "876524d95fffffe",
        rating: 4.5,
        userPublicKey: "2776d8605b6b1bafdd68307758421739868787575fefa3b5ca56ccd52e76f12d",
        maxUserRating: 4.5,
        minRating: 4.5,
        maxPassengers: 4,
        maxWaitingTime: 10,
        minPassengerRating: 2.5,
        role: "car",


      },
    ];
  }

  function getClickableIndexes() {

    const getHexIndexWithDataDrop = fetchDummyData().
    map((data) => {
      return latLngToCell(data.pickupLocation.coordinates[0], data.pickupLocation.coordinates[1], 7);
    })

    const getHexIndexWithDataPickup = fetchDummyData().
    map((data) => {
      return latLngToCell(data.dropoffLocation.coordinates[0], data.dropoffLocation.coordinates[1], 7);
    });

    // merge and remove duplicates
    return new Set(getHexIndexWithDataDrop
      .concat(getHexIndexWithDataPickup));
  }
  

  function getHexagonIndexes() {


    // merge and remove duplicates
    const merged = getClickableIndexes();

    const getHexIndexWithDataDrop = fetchDummyData()

    return getPolygonIndexes().map((polyIndex) => {
        return {
          type: "Feature",
          properties: {
            color: merged.has(polyIndex) ? "green" : "transparent",
            opacity: merged.has(polyIndex) ? 0.25 : 1.0,
            id: polyIndex,
          },
          geometry: {
            type: "Polygon",
            coordinates: [cellToBoundary(polyIndex, true)],
          }
        };
    });
  }


  function getPolygonIndexes() {
    const polygon = [
      [currentCordinateLng - 1.0, currentCordinateLat + 1.0],
      [currentCordinateLng - 1.0,  currentCordinateLat - 1.0],
      [currentCordinateLng + 1.0, currentCordinateLat - 1.0],
      [currentCordinateLng + 1.0, currentCordinateLat + 1.0],
  ];

  //const h3Ine

   const hexagons = polygonToCells(polygon, 7);
    return hexagons;
  }

  function onMapClick(event){

    // get polygon id
    const {lng, lat} = event.lngLat;
    const ply = latLngToCell(lat, lng, 7);
    setCurrentClickedHexagon(ply);
    if(getClickableIndexes().has(ply)){
      handleOpen();
    }
  }

  function getDataByPolygon(polygon){
    return fetchDummyData().filter((data) => {

      const pickupLocation = latLngToCell(data.pickupLocation.coordinates[0], 
        data.pickupLocation.coordinates[1], 7);

      const dropoffLocation = latLngToCell(data.dropoffLocation.coordinates[0], 
        data.dropoffLocation.coordinates[1], 7);


      return pickupLocation === polygon || dropoffLocation === polygon;
    });
  }

  function update(coordinates){
    let {lng, lat} = coordinates.lngLat;
    setCurrentCordinateLng(lat);
    setCurrentCordinateLat(lng);
    setCurrentCordinate([lng, lat]);
  }

  

  return (
<div>

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Hexagon: { currentClickedHexagon }
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {getDataByPolygon(currentClickedHexagon).map((data, index) => {
        return (
          <div>
            {
              index > 0 ? <Divider /> : null
            }
            <div>
            {
              data.role === "user" ? <EmojiPeopleIcon /> : <DirectionsCarIcon />
            } 
            </div>
            <div>Ride {index + 1}</div>
            
            <Typography variant="h6" component="h2">
              UserID: {data.userId}
               </Typography>
            <Typography variant="h6" component="h2">
              Rating: {data.rating}/5
              </Typography>
            <Typography variant="h6" component="h2">
              Max Passenger: {data.maxPassengers}
              </Typography>
            <Typography variant="h6" component="h2">
              Max Waiting Time: {data.maxWaitingTime}min
            </Typography>
            <Typography variant="h6" component="h2">
              Min Passenger Rating: {data.minPassengerRating}/5
            </Typography>
          
            <Typography variant="h6" 
            component="h2" style={{wordBreak: "break-word", display: "inline"}} >
              User Public Key:
            </Typography>
            <Typography variant="h6" 
            component="h2" style={{wordBreak: "break-word", fontSize: "0.8rem"}} >
              {data.userPublicKey}
            </Typography>
            </div>
      )}
      )}
        
    </Typography>
  </Box>
</Modal>

        <div className="map">
          <Map
            initialViewState={{
              latitude: 48.7758,
              longitude: 9.1829,
              zoom: 12,
              bearing: 0,
              pitch: 0,
            }}
            onMouseUp={update}
            onClick={onMapClick}
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
                "type": "FeatureCollection",
                "features": getHexagonIndexes(),
                
              }}
              
            >

              
              <Layer
                {...{
                  type: "fill",

                  paint: {
                    'fill-outline-color': 'green',
                    "fill-color": ["get", "color"],
                    "fill-opacity": ["get", "opacity"],
                    
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