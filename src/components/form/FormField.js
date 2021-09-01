import React from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet, TextInput } from "react-native";
import ErrorMessage from "./ErrorMessage";

function FormField({ name, ...rest }) {
  const { values, setFieldValue, errors } = useFormikContext();
  return (
    <View style={styles.container}>
      <TextInput
        name={name}
        value={values[name]}
        onChangeText={text => setFieldValue(name, text)}
        {...rest}
      />
      <ErrorMessage visible={errors[name]} message={errors[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormField;
