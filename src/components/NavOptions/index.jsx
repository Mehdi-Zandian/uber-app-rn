import React from "react";
import Card from "./Card";
import { FlatList } from "react-native";
import { navOptionsData } from "../../data/NavOptionsData";

const NavOptions = () => {
  return (
    <FlatList
      data={navOptionsData}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card data={item} />}
    />
  );
};

export default NavOptions;
