import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import { colors } from "../styles/global";
import { FC } from "react";

type ButtonProps = {
  text: string;
  outerStyles?: ViewProps["style"];
};

const Button: FC<ButtonProps> = ({ text, outerStyles }) => {
  return (
    <TouchableOpacity style={[styles.button, outerStyles]}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accentOrange,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
  },
});
