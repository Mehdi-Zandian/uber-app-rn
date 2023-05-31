import React from "react";
import NavOptions from "../../components/NavOptions/index";
import { Text, SafeAreaView, View, Image } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white px-5 pt-5">
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={require("../../../assets/app/logo.png")}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
