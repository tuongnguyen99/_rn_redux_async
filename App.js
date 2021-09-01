import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import FetchUserScreen from "./src/screens/FetchUserScreen";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <FetchUserScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
