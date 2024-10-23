import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../styles/global";
import InputField from "../components/InputField";
import Button from "../components/Button";

const { width: screenWidth } = Dimensions.get("screen");

const RegistrationScreen = () => {
  const passwordShow = (
    <TouchableOpacity>
      <Text style={styles.inputBtn}>Показати</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/photoBG.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.formContainer}>
        <View style={styles.photoContainer}></View>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.inputContainer}>
          <InputField placeholder="Логін" />
          <InputField placeholder="Адреса електронної пошти" />
          <InputField
            placeholder="Пароль"
            outerStyles={styles.passwordBtn}
            rightButton={passwordShow}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Зареєстуватися" />
          <Text style={styles.toLoginBtn}>Вже є акаунт? Увійти</Text>
        </View>
      </View>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    gap: 16,
    marginTop: 32,
  },
  buttonContainer: {
    gap: 16,
    marginTop: 42,
  },
  text: {
    fontFamily: "RobotoBold",
  },
  bgImage: {
    position: "absolute",
    height: "100%",
    width: screenWidth,
    top: 0,
  },
  photoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: colors.inputBackground,
    borderRadius: 16,
  },
  formContainer: {
    position: "absolute",
    top: 263,
    bottom: 0,
    width: screenWidth,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
  },
  title: {
    color: colors.darkText,
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    textAlign: "center",
  },
  passwordBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBtn: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.blueText,
  },
  toLoginBtn: {
    color: colors.blueText,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
});
