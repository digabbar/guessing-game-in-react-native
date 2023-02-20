import { View, Pressable, StyleSheet, Text } from "react-native";
const Button = (props) => {
  return (
    <View style={[styles.btn, props.style]}>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => {
          return pressed && styles.btnEffect;
        }}
      >
        <Text style={styles.btnText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 4,
    backgroundColor: "white",
    borderRadius: 15,
    width: 100,
    overflow: "hidden",
  },
  btnText: {
    padding: 10,
    color: "black",
    fontWeight: "600",
    textAlign: "center",
  },
  btnEffect: {
    opacity: 0.4,
  },
});
export default Button;
