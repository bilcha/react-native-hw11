import { StyleSheet, TextInput, View, ViewProps } from "react-native";
import { colors } from "../styles/global";
import { FC, ReactNode } from "react";

type InputProps = {
  placeholder?: string;
  outerStyles?: ViewProps["style"];
  rightButton?: ReactNode;
};

const Input: FC<InputProps> = ({ placeholder, outerStyles, rightButton }) => {
  return (
    <View style={[styles.input, outerStyles]}>
      <TextInput placeholder={placeholder} />
      {rightButton}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.inputBackground,
    padding: 16,
  },
});

export default Input;
