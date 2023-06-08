import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";

interface Props {
  style?: any
}

export default function AlbumCard({style}:Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/wall.jpg")}
        style={styles.image}
        resizeMode="cover"
      >
        <AppText style={[styles.text,style]}>Lawrence Oyor Mix</AppText>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text:{
    fontSize:9,
    marginHorizontal: 4,
    marginBottom: 8
  }
});
