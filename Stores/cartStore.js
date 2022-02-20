import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Toast } from "native-base";
class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];
  addItemToCart = (newItem) => {
    const foundItem = this.items.find(
      (item) => item.product._id === newItem.product._id
    );
    if (foundItem) {
      foundItem.quantity = newItem.quantity;
    } else {
      this.items.push(newItem);
    }
  };
}

const handleAdd = () => {
  const newItem = {
    product: product,
    quantity: quantity,
  };
  cartStore.addItemToCart(newItem);
};
addItemToCart = async (newItem) => {
  await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
};
removeItemFromCart = async (productId) => {
  this.items = this.items.filter((item) => item.product._id !== productId);
  await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
};
checkout = async () => {
  this.items = [];
  // Alert("good bye");
  await AsyncStorage.removeItem("myCart");
  Toast.show({
    title: "checkout",
    status: "info",
    description: "goodbye",
  });
};

const cartStore = new CartStore();
export default cartStore;
