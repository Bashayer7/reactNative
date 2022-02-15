import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "native-base";
import React from "react";

const Home = () => {
  return (
    // <View>
    //   <Text>Home</Text>

    //   <Button onPress={() => alert("yeeeeesss")}>submit </Button>
    //   <Image
    //     style={{ height: 150, width: 150 }}
    //     source={{
    //       uri: "https://d1oklq6066osfz.cloudfront.net/styles/pod_image/s3/royal_mail.jpg",
    //     }}
    //   />
    // </View>
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={{
        uri: "https://d1oklq6066osfz.cloudfront.net/styles/pod_image/s3/royal_mail.jpg",
      }}
    >
      <View
        style={{
          height: "40%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: "38px", textAlign: "center" }}>
          BashayerShop
        </Text>
      </View>
      <Button size="sm">Start shopping</Button>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
