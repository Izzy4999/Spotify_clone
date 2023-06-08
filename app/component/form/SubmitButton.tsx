import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

type Props = {
  title: string;
  color?: any;
  size?: any;
  style?: any;
  textColor?: any;
  icon?: any;
  left?: any;
};

const SubmitButton = ({
  title,
  color,
  size,
  style,
  textColor,
  icon,
  left,
}: Props) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      color={color}
      size={size}
      textColor={textColor}
      icon={icon}
      left={left}
      style={[{padding: 5},style]}
      onPress={handleSubmit}
    />
  );
};

export default SubmitButton;
