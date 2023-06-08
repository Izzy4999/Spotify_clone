import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

export default function ProfileCard() {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("profileCard");
      }}
    >
      <View style={styles.container}>
        <Image source={require("../../assets/wall.jpg")} style={styles.image} />
        <AppText style={styles.text}>BNXN fka Buju</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: "center",
  },
  image: {
    borderRadius: 80,
    width: 150,
    height: 150,
  },
  text: {
    color: colors.white,
    marginVertical: 12,
    fontWeight: 800,
  },
});
