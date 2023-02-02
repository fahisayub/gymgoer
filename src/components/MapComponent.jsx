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
          longitude: mapdata?.longitude,
          latitude: mapdata?.latitude,
          zoom: 10,
        }}
        attributionControl={false}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiZmFoaXNheXViIiwiYSI6ImNsZGxpNWhtcjAxeW8zb253eWZ2NG00aWUifQ.dMbgybyMku9wRwn81Fy2ZQ"
      >
      

        <Marker
          longitude={mapdata?.longitude}
          latitude={mapdata?.latitude}
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

