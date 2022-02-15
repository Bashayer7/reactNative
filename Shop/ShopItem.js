import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack } from "native-base";
import { Image } from "react-native-svg";

const ShopItem = ({ shop }) => {
  return (
    <HStack w="100%" justifyContent="space-between" alignItems="center">
      <Image source={{ uri: shop.Image }} style={styles.shopImage} />
      <Text>{shop.name}</Text>
    </HStack>
  );
};
export default ShopItem;

const styles = StyleSheet.create({
  shopImage: {
    height: 100,
    weight: 100,
  },
});
