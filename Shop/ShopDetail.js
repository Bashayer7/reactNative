import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import shopStore from "../Stores/shopStore";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductList from "../Product/ProductList";

export default function ShopDetail(route) {
  const shop = route.params.shop;

  return (
    <SafeAreaView>
      <View>
        <Text>ShopDetail</Text>
        <Image
          style={{ height: 150, width: 150 }}
          source={{
            uri: "https://d1oklq6066osfz.cloudfront.net/styles/pod_image/s3/royal_mail.jpg",
          }}
        />
        <ProductList p={shop.products} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
