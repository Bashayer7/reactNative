import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";

const CartIcon = () => {
  const navigation = useNavigation();
  return <Button onPress={() => navigation.navigate("Cart")}>Cart</Button>;
};

export default CartIcon;

const styles = StyleSheet.create({});
