import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const RideCards = ({ onSelectCarHandler, data }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelectCarHandler(data)}
      className="flex-row justify-between px-10  items-center"
    >
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
        }}
        source={data.image}
      />
      <View className="-ml-6">
        <Text className="text-xl font-semibold ">{data.title}</Text>
        <Text>{`${data.time[0]} hours ${data.time[1]} mins Travel Time`}</Text>
      </View>
      <Text className="text-xl">${data.price}</Text>
    </TouchableOpacity>
  );
};

export default RideCards;
