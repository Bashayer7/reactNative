import { StyleSheet, Text, View } from "react-native";
import React from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";
import cartStore from "../Stores/cartStore";
import { Badge } from "native-base";

const Cart = () => {
  const navigation = useNavigation();
  const total = 0;
  cartStore.items.forEach((item) => (total = total + item.quantity));
  return (
    <>
      <Badge colorScheme="danger" rounded="full" mb={-4} mr={4}>
        {total}
      </Badge>
      {total === 0 ? (
        <EvilIconsIcon name="cart" size={30} color="blue" />
      ) : (
        <EntypoIcon name="shopping-cart" size={30} color="red" />
      )}
      */
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({});
