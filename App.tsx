import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

import AppButton from "./app/component/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/config/colors";
import AppInput from "./app/component/AppInput";
import LoginScreen from "./app/screens/LoginScreen";
import RegistrationScreen from "./app/screens/RegisterationScreen";
import OTPVerificationScreen from "./app/screens/OTPVerificationScreen";
import HomeScreen from "./app/screens/HomeScreen";
import Card from "./app/component/Card";
import AlbumCard from "./app/component/AlbumCard";
import ViewMixScreen from "./app/screens/ViewMixScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    GloriaHallelujah: require("./assets/fonts/GloriaHallelujah-Regular.ttf"),
    TravajBold: require("./assets/fonts/Taviraj-Bold.ttf"),
    Raleway: require("./assets/fonts/Raleway-VariableFont_wght.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
     <ViewMixScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});
