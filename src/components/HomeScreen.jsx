import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "top", alignItems: "center" }}>
      <Header />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
