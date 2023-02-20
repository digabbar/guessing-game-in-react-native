import { View, Text, StyleSheet } from "react-native";
const GameSummary = (props) => {
  return (
    <View style={styles.gameSummary}>
      <Text style={styles.gameSummaryText}>
        Your Phone needed{" "}
        <Text style={styles.textHighlight}>{props.round}</Text> rounds to guess
        the number <Text style={styles.textHighlight}>{props.userInput}</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  gameSummary: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 20,
  },
  gameSummaryText: {
    color: "black",
    fontSize: 24,
    padding: 10,
  },
  textHighlight: {
    color: "red",
  },
});

export default GameSummary;
