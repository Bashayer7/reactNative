import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../Home/Home";
import ShopList from "../Shop/ShopList";

const StackNaci = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <navigator initialRouterName="Home">
      <Screen name="Home" container={Home} />
      <Screen name="Shops" container={ShopList} />
    </navigator>
  );
};

export default StackNaci;

const styles = StyleSheet.create({});
