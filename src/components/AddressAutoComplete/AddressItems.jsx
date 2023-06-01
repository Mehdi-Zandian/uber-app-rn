import React from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";

const AddressItems = ({ items, onSelectItemsHandler }) => {
  return (
    <FlatList
      className="bg-white mx-2 h-400"
      data={items}
      keyExtractor={(item) => item?.place_id || item?.properties?.place_id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="border-b border-b-gray-300"
          onPress={() => onSelectItemsHandler(item)}
        >
          <Text className="text-lg text-left mb-1 pl-2 py-2">
            {item?.formatted || item?.properties?.formatted}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default AddressItems;
