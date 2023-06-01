import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AddressAutoComplete from "../AddressAutoComplete/index";
import { useSelector } from "react-redux";
import { selectDestination } from "../../store/slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
  const navigation = useNavigation();
  const destination = useSelector(selectDestination);
  return (
    <View className="bg-white flex-1 ">
      <Text className="text-xl text-center py-5">Good Morning Mehdi</Text>
      <View className="border-t border-t-gray-200 flex-shrink px-2 pt-5">
        <AddressAutoComplete placeHolderText="Where to?" target="destination" />
        <View
          className={`w-full rounded pl-2 mx-auto ${!destination && "hidden"}`}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RideOptionsCard");
            }}
            disabled={!destination}
            className="bg-blue-400 rounded flex-row justify-center p-2 items-center"
          >
            <Text className="text-base text-white mr-5">LETS GO</Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NavigateCard;
