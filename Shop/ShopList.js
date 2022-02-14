import { StyleSheet, Text, View } from "react-native";
import React from "react";
import shopStore from "../Stores/shopStore";

import { observer } from "mobx-react";

const shopList = () => {
  const sl = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} />
  ));
  return (
    <View>
      <Text>shopList</Text>
    </View>
  );
};

export default observer(shopList);

const styles = StyleSheet.create({});
