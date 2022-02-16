import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack } from "native-base";
import { Image } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const ShopItem = ({ shop }) => {
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate}>
        <HStack w="100%" justifyContent="space-between" alignItems="center">
          <Image source={{ uri: shop.Image }} style={styles.shopImage} />
          <Text>{shop.name}</Text>
        </HStack>
      </Pressable>
    </SafeAreaView>
  );
};
export default ShopItem;

const styles = StyleSheet.create({
  shopImage: {
    height: 100,
    width: 100,
  },
});
