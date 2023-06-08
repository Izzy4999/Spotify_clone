import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import React from "react";
import colors from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";

export default function AppInput({
  icon,
  width = 300,
  style,
  ...otherProps
}: any) {
  return (
    <View style={[styles.container, { width: width }, style]}>
      {icon && (
        <View style={[styles.icon]}>
          <FontAwesome
            name={icon.name}
            size={icon.size || 30}
            color={icon.color}
          />
        </View>
      )}
      <TextInput style={[styles.input, { paddingRight: 5 }]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.new,
    borderRadius: 20,
    padding: 4,
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
    alignSelf: "center",
  },
  input: {
    fontFamily: "Raleway",
    fontSize: 16,
    minWidth: 30,
    color: colors.dark,
    marginLeft: 5,
    padding: 5,
  },
});
