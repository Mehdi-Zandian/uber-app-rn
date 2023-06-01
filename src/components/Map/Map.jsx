import React from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../../store/slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <MapView
      style={{ flex: 1 }}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location[1],
        longitude: origin?.location[0],
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {origin && destination && (
        <Polyline
          coordinates={[
            { latitude: origin?.location[1], longitude: origin?.location[0] },
            {
              latitude: destination?.location[1],
              longitude: destination?.location[0],
            },
          ]}
          strokeWidth={3}
          strokeColor="blue"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination?.location[1],
            longitude: destination?.location[0],
          }}
          title="Destination"
          description={destination?.description}
          identifier="destination"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location[1],
            longitude: origin?.location[0],
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
