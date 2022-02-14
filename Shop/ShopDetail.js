import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import shopStore from "../Stores/shopStore";

export default function ShopDetail() {
  const shop=shopStore.shops[1],
  
  return (
    <View>
      <Text>ShopDetail</Text>
      <Image
        style={{ height: 150, width: 150 }}
        source={{
          uri: "https://d1oklq6066osfz.cloudfront.net/styles/pod_image/s3/royal_mail.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
