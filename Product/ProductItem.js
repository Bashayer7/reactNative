import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NumericInput from "react-native-numeric-input";

const [quantity, setQuantity] = useState(item.quantity);
const ProductItem = (product) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <NumericInput
        rounded
        value={quantity}
        onChange={(value) => setQuantity(value)}
        totalHeight={30}
        totalWidth={60}
      />
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
