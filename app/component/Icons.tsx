import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  name: any;
  size?: number;
  color?: string;
  onPress: (event: any) => void;
  style?: any;
};

export default function Icons({ name, size, color, onPress, style }: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[{marginHorizontal:10},style]}>
        <FontAwesome name={name} size={size || 30} color={color} />
      </View>
    </TouchableWithoutFeedback>
  );
}
