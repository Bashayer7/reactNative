import { StyleSheet, Text, View } from "react-native";
import Home from "./Home/Home";
import { NativeBaseProvider } from "native-base";
// import ShopList from "./Shop/ShopList";
// import ShopDetail from "./Shop/ShopDetail";
import StackNaci from "./Navigation/StackNaci";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNaci />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
