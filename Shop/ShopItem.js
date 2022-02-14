import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function shopItem(shop) {
  return (
    <View>
      <Text>{shop.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const shopItem = (shop) => {
  return (
    <View>
      <Text>{shop.name}</Text>
    </View>
  )
}

export default shopItem

const styles = StyleSheet.create({})