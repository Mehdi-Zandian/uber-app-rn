import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";

const WaitForUber = ({ navigation, route }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  // get passed values from stack navigator
  const { image, title } = route.params;

  return (
    <View className="bg-white flex-1">
      <Animated.View
        style={[{ opacity: fadeAnim }]}
        className="flex-row items-center justify-center"
      >
        <Text className="py-5 text-lg text-center mr-5">
          Please Wait For Your Uber
        </Text>
        <ActivityIndicator size="small" color="#333" />
      </Animated.View>

      <Animated.View
        style={[{ opacity: fadeAnim }]}
        className="bg-white flex-1 items-center"
      >
        <Text className="font-semibold text-yellow-500">
          {title} is on the way ... 😃
        </Text>
        <Image
          source={image}
          style={{ height: 200, width: 250, resizeMode: "contain" }}
        />
      </Animated.View>

      <Animated.View style={[{ opacity: fadeAnim }]}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          className="py-3 m-3 rounded-lg bg-black"
        >
          <Text className="text-center text-white text-xl">Cancel Uber</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default WaitForUber;
