import { StyleSheet, Text, View } from "react-native";
import React from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();
  return <EntypoIcon name="shopping-cart" size={30} color="blue" />;
};

export default Cart;

const styles = StyleSheet.create({});
