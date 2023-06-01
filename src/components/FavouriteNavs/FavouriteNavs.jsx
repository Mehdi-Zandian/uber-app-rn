import React from "react";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { data } from "../../data/FavouriteData";
import { FontAwesome5 } from "@expo/vector-icons";

const FavouriteNavs = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-[0.5px]" />}
      renderItem={({ item }) => (
        <TouchableOpacity className="p-5 items-center flex-row">
          <View className="bg-gray-300 p-3 rounded-full mr-4">
            <FontAwesome5 name={item.icons} size={24} color="black" />
          </View>
          <View>
            <Text className="font-semibold text-lg">{item.location}</Text>
            <Text className="font-semibold text-gray-500">
              {item.destination}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default FavouriteNavs;
