import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { fetchUser } from "../actions/fetchUser";
import { FormField, Form, SubmitButton } from "./form";
import * as Yup from "yup";

const initialValue = {
  username: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string().min(1).required(),
});

function FetchForm() {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(fetchUser(values.username));
  };
  return (
    <View style={styles.container}>
      <Form
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField
          name='username'
          placeholder='Username'
          autoCapitalize='none'
        />
        <SubmitButton title='Submit' />
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FetchForm;
