import { useFormikContext } from "formik";
import React from "react";
import { View, StyleSheet, Button } from "react-native";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({
  container: {},
});

export default SubmitButton;
