import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import shopStore from "../Stores/shopStore";

import { observer } from "mobx-react";
import ShopItem from "./ShopItem";
import { Box, Center, Heading, VStack } from "native-base";

const ShopList = () => {
  const sl = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} navigation={navigation} />
  ));
  return;
  <Center w="100%">
    <Box maxW="300" w="100%">
      <Heading mb="2" size="md">
        Shops
      </Heading>
      <VStack space={4}>
        <VStack space={2}>{sl}</VStack>;
      </VStack>
    </Box>
  </Center>;
};

export default observer(ShopList);

const styles = StyleSheet.create({});
