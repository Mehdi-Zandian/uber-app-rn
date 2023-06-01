import React from "react";
import NavOptions from "../components/NavOptions/index";
import AddressAutocomplete from "../components/AddressAutoComplete/index";
import { SafeAreaView, View, Image, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white px-5 pt-5">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={require("../../assets/app/logo.png")}
          />

          <AddressAutocomplete />

          <NavOptions />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default HomeScreen;
