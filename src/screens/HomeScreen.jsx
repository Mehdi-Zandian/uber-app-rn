import React from "react";
import NavOptions from "../components/NavOptions/index";
import AddressAutocomplete from "../components/AddressAutoComplete/index";
import { SafeAreaView, View, Image, KeyboardAvoidingView } from "react-native";
import FavouriteNavs from "../components/FavouriteNavs/FavouriteNavs";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white px-5 pt-5 flex-1">
      <KeyboardAvoidingView>
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={require("../../assets/app/logo.png")}
          />

          <AddressAutocomplete placeHolderText="Where from?" target="origin" />

          <NavOptions />
          <FavouriteNavs />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
