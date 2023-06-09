import React from "react";
import { View } from "react-native";
import Map from "../components/Map/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/Map/NavigateCard";
import RideOptionsCard from "../components/Map/RideOptionsCard";
import WaitForUber from "../components/WaitForUber/WaitForUber";

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>

      <View className="h-1/2">
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="NavigateCard" component={NavigateCard} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
          <Stack.Screen name="WaitForUber" component={WaitForUber} />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
