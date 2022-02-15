import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../Home/Home";
import ShopList from "../Shop/ShopList";
import ShopDetail from "../Shop/ShopDetail";

const StackNaci = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <navigator initialRouterName="Home">
      <Screen
        name="Home"
        container={Home}
        options={{
          headerStyle: {
            backgroundColor: "grey",
          },
          headerTintColor: "red",
        }}
      />
      <Screen
        name="Shops"
        container={ShopList}
        options={{ headerTitle: "all shops" }}
      />
      <Screen name="ShopDetail" container={ShopDetail} />
    </navigator>
  );
};

export default StackNaci;

const styles = StyleSheet.create({});
