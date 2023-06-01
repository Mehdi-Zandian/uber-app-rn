import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Card = ({ data }) => {
  const navigation = useNavigation();
  const onPressCardHandler = () => {
    navigation.navigate(data.screen);
  };

  return (
    <TouchableOpacity
      onPress={onPressCardHandler}
      className="p-2 pl-6 pb-8 pt-4 m-2 w-40 rounded bg-gray-200"
    >
      <View>
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
