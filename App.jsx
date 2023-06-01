import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import HomeStack from "./src/routes/homeStack";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
