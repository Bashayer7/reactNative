import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { Button } from "native-base";
import cartStore from "../Stores/cartStore";

const [quantity, setQuantity] = useState(item.quantity);
const hundleQuantity = (value) => setQuantity(value);
const hundleAdd = () => {
  const item = {
    product: product,
    quantity: quantity,
  };
  cartStore.addItemToCart(item);
  setQuantity(0);
};
const ProductItem = (product) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <NumericInput
        rounded
        initValue={quanity}
        value={quantity}
        onChange={(value) => setQuantity(value)}
        minValue={1}
        totalHeight={30}
        totalWidth={60}
      />
      <Button>Add</Button>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
