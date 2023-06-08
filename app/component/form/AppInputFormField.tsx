import { View, Text } from "react-native";
import { useFormikContext } from "formik";
import React from "react";

import AppInput from "../AppInput";
import ErrorMessage from "./Error";

export default function AppInputFormField({ name, ...otheProps }: any) {
  const { values, handleBlur, errors, handleChange, touched } =
    useFormikContext();
  return (
    <>
      <AppInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        width={"100%"}
        {...otheProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
