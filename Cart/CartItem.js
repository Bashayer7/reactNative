import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import { Image } from "react-native-svg";

const CartItem = (item) => {
  const cost = item.product.price * item.quantity;
  return (
    //horizental to disply the image
    <HStack>
      <Image source={{ uri: items.product.image }} />
      {/* vertical to disply details  */}
      <VStack>
        <Text>{items.product.name}</Text>
        <Text>
          {items.product.price}KD X {item.quantity}
        </Text>
        <Text>{cost}</Text>
      </VStack>
    </HStack>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
