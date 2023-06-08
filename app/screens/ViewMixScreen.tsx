import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../component/AppText";
import Screen from "../component/Screen";
import Icons from "../component/Icons";
import colors from "../config/colors";
import AlbumCard from "../component/AlbumCard";
import AppInput from "../component/AppInput";
import AppButton from "../component/AppButton";

export default function ViewMixScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.headerIcon}>
        <Icons
          name={"long-arrow-left"}
          onPress={() => {
            console.log("back");
          }}
          color={colors.white}
        />
      </View>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.search}>
            <View style={styles.input}>
              <AppInput
                icon={{ name: "search", size: 20, color: colors.medium }}
                width={250}
                placeholder={"Find in Playlist"}
                style={{ borderRadius: 5 }}
              />
            </View>
            <View style={styles.button}>
              <AppButton title="sort" style={{ borderRadius: 5, padding: 4 }} />
            </View>
          </View>
          <View style={styles.albumCard}>
            <AlbumCard style={{ fontSize: 30, marginHorizontal: 10 }} />
          </View>
        </View>
        <View style={styles.details}>
          <View style={styles.artist}>
            <AppText> Theophilus Sunday, Praiz, Singz and TyBello</AppText>
          </View>
          <View style={styles.app}></View>
          <View style={styles.length}></View>
          <View style={styles.options}></View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  albumCard: {
    width: 200,
    height: 200,
    borderBottomColor: colors.primary,
    borderBottomWidth: 8,
    alignSelf: "center",
    marginTop: 10,
  },
  app: {},
  artist: {},
  button: {
    width: 80,
  },
  container: {
    padding: 10,
  },
  details: {},
  header: {},
  headerIcon: {},
  input: {
    width: 220,
    margin: 0,
    overflow: "hidden",
  },
  length: {},
  options: {},
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});
