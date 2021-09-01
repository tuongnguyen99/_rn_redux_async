import React from "react";
import { View, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import FetchForm from "../components/FetchForm";
import UserInfo from "../components/UserInfo";

function FetchUserScreen(props) {
  const isLoading = useSelector(state => state.user.isLoading);
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color='dodgerblue'
        size='large'
        animating={isLoading}
      />
      <UserInfo />
      <FetchForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 12,
    paddingTop: StatusBar.currentHeight,
  },
});

export default FetchUserScreen;
