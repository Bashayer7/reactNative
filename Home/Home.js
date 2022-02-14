import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "native-base";
import React from "react";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      {/* <Button onPress={onPressLearnMore} title="submit" /> */}
      <Button onPress={() => alert("yeeeeesss")}>submit </Button>
      <Image
        style={{ height: 150, width: 150 }}
        source={{
          uri: "https://d1oklq6066osfz.cloudfront.net/styles/pod_image/s3/royal_mail.jpg",
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
