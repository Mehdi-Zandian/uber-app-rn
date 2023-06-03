import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const RideCards = ({ selectCar, onSelectCarHandler, data }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelectCarHandler(data)}
      className={`flex-row justify-between px-5  items-center ${
        selectCar?.id === data?.id && "bg-gray-200"
      }`}
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
        <Text>{`${data.time[0]} hours ${data.time[1]} mins travel time`}</Text>
      </View>
      <Text className="text-xl">${data.price}</Text>
    </TouchableOpacity>
  );
};

export default RideCards;
