import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";
import cartStore from "../Stores/cartStore";
import { Badge } from "native-base";
import { Observer } from "mobx-react";

const Cart = () => {
  const navigation = useNavigation();
  const total = 0;
  cartStore.items.forEach((item) => (total = total + item.quantity));
  return (
    <Pressable onPress={() => navigation.navigate("Cart")}>
      <Badge colorScheme="danger" rounded="full" mb={-4} mr={4}>
        {total}
      </Badge>
      {total === 0 ? (
        <EvilIconsIcon name="cart" size={30} color="blue" />
      ) : (
        <EntypoIcon name="shopping-cart" size={30} color="red" />
      )}
    </Pressable>
  );
};

export default Observer(Cart);

const styles = StyleSheet.create({});
