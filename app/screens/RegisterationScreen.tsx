import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

import AppForm from "../component/form/AppForm";
import AppInputFormField from "../component/form/AppInputFormField";
import SubmitButton from "../component/form/SubmitButton";
import Screen from "../component/Screen";
import colors from "../config/colors";

const formValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone:Yup.string().required("Phone Number is required"),
  userName: Yup.string(),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function RegistrationScreen() {
  const handleSubmit = (values, onSubmitProps) => {
    console.log(values);
  };
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text style={styles.logoText}>Bit Muzic</Text>
      </View>
      <View style={styles.login}>
        <AppForm
          initialValues={{name: "",phone:"", email: "", userName:"",password:"" }}
          validationSchema={formValidation}
          onSubmit={(values, onSubmitProps) => {
            handleSubmit(values, onSubmitProps);
          }}
        >
          <AppInputFormField
            name={"name"}
            placeholder="Name"
            icon={{name:"user",color:colors.medium, size: 25}}
          />
          <AppInputFormField
            name={"phone"}
            keyboardType={"numeric"}
            placeholder="Phone"
            icon={{name:"phone",color:colors.medium, size: 25}}
          />
          <AppInputFormField
            name={"email"}
            keyboardType={"email-address"}
            placeholder="Email"
            icon={{name:"envelope",color:colors.medium, size: 25}}
          />
          <AppInputFormField
            name={"userName"}
            placeholder="User Name"
            icon={{name:"user-circle",color:colors.medium, size: 25}}
          />
          <AppInputFormField
            name={"password"}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            icon={{name:"lock",color:colors.medium}}
            placeholder="Password"
            secureTextEntry={true}
            multiple={false}
            textContentType="password"
          />
          <SubmitButton title={"Register"} left={10} />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{   padding: 10,},
  login: {
    marginVertical: 60,
    width: "100%",
  },
  logo: {
    padding: 0,
    margin: 0,
    width: 80,
    height: 80,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  logoText: {
    margin: 0,
    padding: 0,
    fontSize: 25,
    fontFamily: "GloriaHallelujah",
    color: colors.white,
  },
});
