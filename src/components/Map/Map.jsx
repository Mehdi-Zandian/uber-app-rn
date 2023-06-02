import React from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../../store/slices/navSlice";
import useFetchAPI from "../../hooks/useFetchAPI";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  // get coordinates between origin and destination
  const { data: COORDS } = useFetchAPI(
    "/routing?waypoints=",
    origin && destination
      ? `${origin?.location[0]},${origin?.location[1]}|${destination?.location[0]},${destination?.location[1]}&mode=drive&`
      : "empty"
  );

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

      {COORDS && (
        <Polyline
          coordinates={[
            {
              latitude: origin?.location[1],
              longitude: origin?.location[0],
            },
            ...COORDS?.features[0]?.geometry?.coordinates[0].map((i) => {
              return { latitude: i[0], longitude: i[1] };
            }),
          ]}
          strokeWidth={3}
          strokeColor="blue"
        />
      )}
    </MapView>
  );
};

export default Map;
