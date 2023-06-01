import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../../store/slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
      style={{ flex: 1 }}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location[1],
        longitude: origin.location[0],
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    />
  );
};

export default Map;
