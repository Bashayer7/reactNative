import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../Home/Home";
import ShopList from "../Shop/ShopList";
import ShopDetail from "../Shop/ShopDetail";
import Cart from "../Cart/Cart";
import { createStackNavigator } from "@react-navigation/stack";
import CartIcon from "../Cart/CartIcon";
import CartList from "../Cart/CartList";

const StackNaci = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouterName="Home">
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
        options={{ headerTitle: "all shops", headerRight: () => <CartIcon /> }}
      />
      {/* </cart> i have to add icon in these two pages */}
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => ({
          title: route.params.shop.name,
          headerRight: () => <CartIcon />,
        })}
      />
      <Screen name="Cart" component={CartList} />
    </Navigator>
  );
};

export default StackNaci;

const styles = StyleSheet.create({});
