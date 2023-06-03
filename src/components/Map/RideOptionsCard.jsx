import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setDestination } from "../../store/slices/navSlice";
import { data } from "../../data/RideCardsData";
import RideCards from "./RideCards";
import { useState } from "react";

const RideOptionsCard = ({ navigation }) => {
  const dispatch = useDispatch();
  const onBackButtonHandler = () => {
    navigation.navigate("NavigateCard");
    setSelectCar(null);
    dispatch(setDestination(null));
  };

  // select style on selected car
  const [selectCar, setSelectCar] = useState(null);
  const onSelectCarHandler = (item) => setSelectCar(item);

  return (
    <View className="bg-white flex-1">
      <View className="flex-row items-center pl-5">
        <TouchableOpacity
          onPress={onBackButtonHandler}
          className="text-center p-1 mr-5"
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">Pick a Ride</Text>
      </View>

      <FlatList
        style={{ flex: 1 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RideCards
            selectCar={selectCar}
            onSelectCarHandler={onSelectCarHandler}
            data={item}
          />
        )}
      />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("WaitForUber", {
            image: selectCar?.image,
            title: selectCar?.title,
          })
        }
        disabled={!selectCar}
        className={`py-3 m-3 rounded-lg ${
          !selectCar ? "bg-gray-300" : "bg-black"
        }`}
      >
        <Text className="text-center text-white text-xl">
          Choose {selectCar?.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RideOptionsCard;
