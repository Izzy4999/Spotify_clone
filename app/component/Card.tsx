import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import AlbumCard from "./AlbumCard";
import colors from "../config/colors";
import Screen from "./Screen";

export default function Card({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.background}>
        <View style={styles.image}>
          <AlbumCard />
        </View>
        <AppText style={styles.text}>Lawrence Oyor Mix</AppText>
        <AppText style={styles.elipse}>...</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    backgroundColor: colors.medium,
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 8,
    overflow: "hidden",
    width: "100%",
  },
  elipse: {
    fontWeight: "bold",
    marginRight: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderBottomColor: colors.primary,
    borderBottomWidth: 5,
  },
  text: {
    flex: 1,
    fontSize: 12,
    flexWrap: "wrap",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});
