import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../Home/Home";
import ShopList from "../Shop/ShopList";
import ShopDetail from "../Shop/ShopDetail";
import Cart from "../Cart/Cart";

const StackNaci = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <navigator initialRouterName="Home">
      {/* if i want to apply the options in all screens 
    i add screen option to naviogator */}
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "grey",
          },
          headerTintColor: "red",
        }}
      />
      <Screen
        name="Shops"
        component={ShopList}
        options={{ headerTitle: "all shops" }}
      />
      <Screen name="ShopDetail" container={ShopDetail} />
    </navigator>
  );
};

export default StackNaci;

const styles = StyleSheet.create({});
