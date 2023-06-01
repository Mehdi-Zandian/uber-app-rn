import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../../store/slices/navSlice";

const Card = ({ data }) => {
  const navigation = useNavigation();
  const onPressCardHandler = () => {
    navigation.navigate(data.screen);
  };

  const origin = useSelector(selectOrigin);

  return (
    <TouchableOpacity
      disabled={!origin}
      onPress={onPressCardHandler}
      className="p-2 pl-6 pb-8 pt-4 m-2 w-40 rounded bg-gray-200"
    >
      <View className={!origin && "opacity-20"}>
        <Image
          style={{ width: 120, height: 120, resizeMode: "contain" }}
          source={data.image}
        />
        <Text className="text-lg mt-2 font-semibold">{data.title}</Text>
        <Ionicons
          style={{
            paddingTop: 10,
          }}
          name="arrow-forward-circle"
          size={35}
          color="black"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
