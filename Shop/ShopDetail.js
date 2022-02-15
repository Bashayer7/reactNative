import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import shopStore from "../Stores/shopStore";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductList from "../Product/ProductList";
import { observer } from "mobx-react-lite";
import ProductItem from "../Product/ProductItem";
import createNativeNavigator from "";
const ShopDetail = () => {
  const shop = shopStore.shops[1];
  // const prod = shop.products.map((product) => (
  //   <ProductItem key={product._id} product={product} />
  // /));

  return (
    <SafeAreaView>
      <View>
        <Text>products</Text>
        {prod}
        <Image
          style={{ height: 150, width: 150 }}
          source={{
            uri: "https://d1oklq6066osfz.cloudfront.net/styles/pod_image/s3/royal_mail.jpg",
          }}
        />
        <Button onPress={() => navigation.push("Home")}>Push</Button>
        <Button onPress={() => navigation.navigate("Home")}>Navigate</Button>
        <Button onPress={() => navigation.replace("Home")}>Replace</Button>
        <ProductList p={shop.products} />
      </View>
    </SafeAreaView>
  );
};
export default observer(ShopDetail);

const styles = StyleSheet.create({});
