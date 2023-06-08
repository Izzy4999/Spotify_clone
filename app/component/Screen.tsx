import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants"

type Props =  {
    children:React.ReactNode,
    style?:{}
}

const Screen = ({children,style}:Props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.view,style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
      },
      view:{
        flex: 1,
      }
});
