import React from "react";
import { StyleSheet, Text } from "react-native";

function ErrorMessage({ message, visible }) {
  return visible ? <Text style={styles.message}>{message}</Text> : null;
}

const styles = StyleSheet.create({
  message: {
    color: "coral",
    fontSize: 12,
  },
});

export default ErrorMessage;
