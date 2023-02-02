import { Container } from "@chakra-ui/react";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import Map, { GeolocateControl, Marker } from "react-map-gl";


const MapComponent = ({ mapdata }) => {
  return (
    <Container
      w="90%"
      m="auto"
      h="70%"
      borderRadius="20px"
      border="5px solid indigo"
      p="0px"
      overflow={"hidden"}
    >
      <Map
        initialViewState={{
          longitude: mapdata.longitude||10.00,
          latitude: mapdata.latitude||7.60,
          zoom: 10,
        }}
        attributionControl={false}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiZmFoaXNheXViIiwiYSI6ImNsZGxpNWhtcjAxeW8zb253eWZ2NG00aWUifQ.dMbgybyMku9wRwn81Fy2ZQ"
      >
      

        <Marker
          longitude={mapdata.longitude||10.00}
          latitude={mapdata.latitude||7.60}
          anchor="bottom"
        >
          <MdLocationPin fontSize="40px" color="red" />
        </Marker>
        <GeolocateControl position="bottom-right" />
      </Map>
    </Container>
  );
};

export default MapComponent;

// import { Container } from "@chakra-ui/react";
// import React, { useRef, useEffect, useState } from "react";
// import mapboxgl from "mapbox-gl";
// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZmFoaXNheXViIiwiYSI6ImNsZGxpNWhtcjAxeW8zb253eWZ2NG00aWUifQ.dMbgybyMku9wRwn81Fy2ZQ";
// const MapComponent = ({ mapdata }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const marker = useRef(null);
//   const [lng, setLng] = useState(76.394943);
//   const [lat, setLat] = useState(10.151535);
//   const [zoom, setZoom] = useState(9);
//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [lng, lat],
//       zoom: zoom,
//     });
//     if(marker.current)return;
//     marker.current = new mapboxgl.Marker().setLngLat([76.394943, 10.151535]).addTo(map);
//     // Set marker options.
// marker.current = new mapboxgl.Marker({
//     color: "red",
//     draggable: false
// }).setLngLat([30.5, 50.5])
//     .addTo(map);
//   });
//   // Create a new marker.

//   useEffect(() => {
//     if (!map.current) return; // wait for map to initialize
//     map.current.on("move", () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });
//   return (
//     <Container
//       ref={mapContainer}
//       className="map-container"
//       w="90%"
//       m="auto"
//       h="70%"
//       borderRadius="20px"
//       border="5px solid indigo"
//     />
//   );
// };

// export default MapComponent;
