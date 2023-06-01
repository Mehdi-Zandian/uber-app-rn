import React from "react";
import { FlatList, TouchableOpacity, Text } from "react-native";
import { data } from "../../data/FavouriteData";

const FavouriteNavs = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>Yo</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default FavouriteNavs;
