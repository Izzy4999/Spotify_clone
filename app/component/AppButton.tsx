import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

import colors from "../config/colors";

export default function AppButton({
  title,
  color = "primary",
  size = 20,
  style,
  textColor = "white",
  icon,
  left = 25,
  onPress,
}: any) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      {icon && (
        <View style={[styles.icon, { left: left }]}>
          <FontAwesome name={icon.name} size={icon.size} color={icon.color} />
        </View>
      )}
      <Text style={[styles.text, { fontSize: size, color: colors[textColor] }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginVertical: 5,
  },
  icon: {
    position: "absolute",
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontFamily: "GloriaHallelujah",
  },
});
