import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";


import AppButton from "../component/AppButton";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text style={styles.logoText}>Bit Muzic</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Millons of Songs.{"\n"}Free on BitMuzic.
        </Text>
      </View>
      <View style={styles.buttons}>
        <AppButton title="Sign Up for free" size={15}  />
        <AppButton
          title="Continue with Phone Number"
          size={15}
          color={colors.transparent}
          style={{
            borderColor: colors.medium,
            borderWidth: 1,
            paddingHorizontal: 45,
          }}
          icon={{name:"mobile-phone",size:40,color:"white"}}
        />
        <AppButton
          title="Continue with Google"
          size={15}
          color={colors.transparent}
          style={{
            borderColor: colors.medium,
            borderWidth: 1,
            paddingHorizontal: 45,
          }}
          icon={{name:"google",size:30,color:"white"}}
        />
        <AppButton
          title="Continue with Facebook"
          size={15}
          color={colors.transparent}
          style={{
            borderColor: colors.medium,
            borderWidth: 1,
            paddingHorizontal: 45,
          }}
          icon={{name:"facebook-square",size:30,color:"white"}}
        />
        <AppButton title={"Log In"} color={colors.transparent}  icon={{name:"long-arrow-right",size:30,color:"white"}} left={100} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark,
  },
  buttons: {
    alignItems: "center",
    position: "absolute",
    bottom: 30,
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
    position: "absolute",
    top: 200,
  },
  logoText: {
    margin: 0,
    padding: 0,
    fontSize: 25,
    fontFamily: "GloriaHallelujah",
    color: colors.white,
  },
  messageContainer: {
    alignItems: "center",
    position: "absolute",
    top: 370,
  },
  messageText: {
    color: colors.white,
    fontFamily: "TravajBold",
    fontSize: 24,
    margin: 0,
  },
});
