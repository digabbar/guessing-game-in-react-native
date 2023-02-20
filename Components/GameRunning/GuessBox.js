import { View, Text, StyleSheet } from "react-native";
const GuessBox = (props) => {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{props.guessValue}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    borderRadius: 21,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  boxText: {
    color: "black",
    fontSize: 32,
  },
});
export default GuessBox;
