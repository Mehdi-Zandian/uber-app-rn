import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const AddressInput = ({
  enterdText,
  onChangeAddressHandler,
  onRemoveAddressHandler,
}) => {
  return (
    <View className="relative">
      <TextInput
        className="bg-gray-200 py-1 text-left px-3 ml-2 rounded text-base border-b-0"
        placeholder="Where From?"
        value={enterdText}
        onChangeText={onChangeAddressHandler}
      />
      {enterdText.length > 0 && (
        <TouchableOpacity
          onPress={onRemoveAddressHandler}
          className="absolute right-5 top-2"
        >
          <Entypo name="circle-with-cross" size={18} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddressInput;
