import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

import AppForm from "../component/form/AppForm";
import AppInputFormField from "../component/form/AppInputFormField";
import SubmitButton from "../component/form/SubmitButton";
import Screen from "../component/Screen";
import colors from "../config/colors";
import AppText from "../component/AppText";

const formValidation = Yup.object().shape({
  email_otp: Yup.string().required("Email OTP is required"),
  password_otp: Yup.string().required("Phone OTP is required"),
});

export default function OTPVerificationScreen() {
  const handleSubmit = (values, onSubmitProps) => {
    console.log(values);
  };
  return (
    <Screen style={styles.container}>
      <View>
        <AppText style={styles.text}>Verify Email and Phone number</AppText>
      </View>
      <View style={styles.form}>
        <AppForm
          initialValues={{ password_otp: "", email_otp: "" }}
          validationSchema={formValidation}
          onSubmit={(values, onSubmitProps) => {
            handleSubmit(values, onSubmitProps);
          }}
        >
          <AppText style={styles.label}>Email OTP :</AppText>
          <AppInputFormField
            name={"email_otp"}
            keyboardType={"numeric"}
            maxLength={6}
          />
          <AppText style={styles.label}>Phone OTP :</AppText>
          <AppInputFormField
            name={"password_otp"}
            keyboardType={"numeric"}
            maxLength={6}
          />
          <SubmitButton
            title={"Verify"}
            left={10}
            style={{ fontFamily: "Raleway" }}
          />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, marginTop: 50 },
  form: {
    width: "100%",
  },
  label: {
    color: colors.white,
    fontFamily: "Raleway",
    fontSize: 18,
  },
  text: {
    alignItems: "center",
    alignSelf: "center",
    fontSize: 20,
    color: colors.white,
    fontFamily: "Raleway",
    marginVertical: 30,
  },
});
